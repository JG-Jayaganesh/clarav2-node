/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var express = require('express'); // app server
var bodyParser = require('body-parser'); // parser for post requests
var Conversation = require('watson-developer-cloud/conversation/v1'); // watson sdk
var aerospike = require('./db/aerospike.js');
var processUserInput = require('./process-user-input.js').processUserInput;
var dbStatusCode = 0;

var app = express();

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json());

// Create the service wrapper
var conversation = new Conversation({
  // If unspecified here, the CONVERSATION_USERNAME and CONVERSATION_PASSWORD env properties will be checked
  // After that, the SDK will fall back to the bluemix-provided VCAP_SERVICES environment property
  // username: '<username>',
  // password: '<password>',
  url: 'https://gateway.watsonplatform.net/conversation/api',
  version_date: '2016-10-21',
  version: 'v1'
});

// Endpoint to be call from the client side
app.post('/api/message', function(req, res) {
  var workspace = process.env.WORKSPACE_ID || '<workspace-id>';
  if (!workspace || workspace === '<workspace-id>') {
    return res.json({
      'output': {
        'text': 'The app has not been configured with a <b>WORKSPACE_ID</b> environment variable. Please refer to the ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple">README</a> documentation on how to set this variable. <br>' + 'Once a workspace has been defined the intents may be imported from ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple/blob/master/training/car_workspace.json">here</a> in order to get a working application.'
      }
    });
  }
  var payload = {
    workspace_id: workspace,
    context: req.body.context || {},
    input: req.body.input || {}
  };
  //console.log(payload);
  if(payload.context.customer){
    console.log('get number');
    var updatePayload = function(customer_data){
      if(typeof customer_data !== 'undefined' && customer_data.length>0){
        customer_data = customer_data[0];
        var purchase_option = customer_data.payment_type;
        //console.log(purchase_option);
        payload.input.text = purchase_option;
      } else {
        // don't update the payload
      }
      // Send the input to the conversation service
      conversation.message(payload, function(err, data) {
        if (err) {
          console.log('responsed with error!');
          console.log(payload);
          console.log(err);
          return res.status(err.code || 500).json(err);
        }

        console.log('got a response!');
        console.log(data);
        console.log(payload);
        return res.json(updateMessage(payload, data));
      });
    };

    processUserInput.init(payload, updatePayload);
  } else {
    console.log('proceed conversation');
    // Send the input to the conversation service
    conversation.message(payload, function(err, data) {
      if (err) {
        console.log('responsed with error!');
        console.log(payload);
        console.log(err);
        return res.status(err.code || 500).json(err);
      }

      console.log('got a response!');
      console.log(data);
      console.log(payload);
      return res.json(updateMessage(payload, data));
    });
  }
});

/**
 * Updates the response text using the intent confidence
 * @param  {Object} input The request to the Conversation service
 * @param  {Object} response The response from the Conversation service
 * @return {Object}          The response with the updated message
 */
function updateMessage(input, response) {
  var responseText = null;
  if (!response.output) {
    response.output = {};
  } else {
    return response;
  }
  if (response.intents && response.intents[0]) {
    var intent = response.intents[0];
    // Depending on the confidence of the response the app can return different messages.
    // The confidence will vary depending on how well the system is trained. The service will always try to assign
    // a class/intent to the input. If the confidence is low, then it suggests the service is unsure of the
    // user's intent . In these cases it is usually best to return a disambiguation message
    // ('I did not understand your intent, please rephrase your question', etc..)
    if (intent.confidence >= 0.75) {
      responseText = 'I understood your intent was ' + intent.intent;
    } else if (intent.confidence >= 0.5) {
      responseText = 'I think your intent was ' + intent.intent;
    } else {
      responseText = 'I did not understand your intent';
    }
  }
  response.output.text = responseText;
  return response;
}


// Establish connection to the cluster
aerospike.connect(function(error) {
    if (error) {
        // handle failure
        dbStatusCode = error.code
        console.log('Connection to Aerospike cluster failed!')
    } else {
        // handle success
        console.log('Connection to Aerospike cluster succeeded!')
    }
});

// Setup default/home route
// app.get('/', function(req, res) {
//     res.send('<div><form action="/write"><label>Enter your name:</label><input type="text" name="name"/><input type="submit"></input></form></div>')
// })
// // Setup write route
// app.get('/write', function(req, res) {
//     if (dbStatusCode === 0) {
//         aerospike.writeRecord('Hello', req.query.name, function(error, result) {
//             if (error) {
//                 // handle failure
//                 res.send(error.message)
//             } else {
//                 // handle success
//                 aerospike.readRecord('Hello', function(error, result) {
//                     if (error) {
//                         // handle failure
//                     } else {
//                         // handle success
//                     }
//                     res.send(result)
//                 })
//             }
//         })
//     } else {
//         res.send('Connection to Aerospike cluster failed!')
//     }
// })

require('./routes/conversation')(app);
require('./routes/speech-to-text')(app);

// error-handler settings
// require('./config/error-handler')(app);

module.exports = app;
