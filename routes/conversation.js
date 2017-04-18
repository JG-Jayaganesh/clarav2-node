'use strict';

const watson = require('watson-developer-cloud'); // watson sdk
const processUserInput = require('../lib/process-user-input.js');
const clarav2Session = require('../lib/clarav2-session.js');

let reqPayload = "";

// Create the service wrapper
const conversation = watson.conversation({
  // If unspecified here, the CONVERSATION_USERNAME and CONVERSATION_PASSWORD env properties will be checked
  // After that, the SDK will fall back to the bluemix-provided VCAP_SERVICES environment property
  // username: '<username>',
  // password: '<password>',
  version_date: '2016-10-21',
  version: 'v1'
});

const conversationReponse = function(req, res, next){
    const workspace = process.env.WORKSPACE_ID || '<workspace-id>';
    if (!workspace || workspace === '<workspace-id>') {
      return res.json({
        output: {
          text: 'The app has not been configured with a <b>WORKSPACE_ID</b> environment variable. Please refer to the ' +
            '<a href="https://github.com/watson-developer-cloud/conversation-simple">README</a> ' +
            'documentation on how to set this variable. <br>' +
            'Once a workspace has been defined the intents may be imported from ' +
            '<a href="https://github.com/watson-developer-cloud/conversation-simple/blob/master/training/car_workspace.json">here</a> ' +
            'in order to get a working application.'
        }
      });
    }
    const payload = {
      workspace_id: workspace,
      context: req.body.context || {},
      input: req.body.input || {}
    };
    const userInputPayload = {
      payload: payload,
      request: req,
      response: res,
      next: next
    }
    processUserInput.init(userInputPayload, callConversationService);
    return next;
}

/**
 * Updates the response text using the intent confidence
 * @param  {Object} input The request to the Conversation service
 * @param  {Object} response The response from the Conversation service
 * @return {Object}          The response with the updated message
 */
const updateMessage = (input, response) => {
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
};

const messageCallback = (err, data) => {
  const conversationPayload = reqPayload.payload;
  let sess = reqPayload.request.session;
  const res = reqPayload.response;
  if (err)
    return next(err);

  // save conversation-id if not exist
  if(sess[data.context.conversation_id] == undefined){
    clarav2Session.setConversation(reqPayload.request, data.context.conversation_id);
  }

  //return res.status(err.code || 500).json(err);
  return res.json(updateMessage(conversationPayload, data));
}

const callConversationService = function(payload){
  const conversationPayload = payload.payload;
  reqPayload = payload;

  console.log('processed payload');
  console.log(conversationPayload);

  // Send the input to the conversation service
  conversation.message(conversationPayload, messageCallback);
}

module.exports = function(app) {
  app.post('/api/message', conversationReponse);
};
