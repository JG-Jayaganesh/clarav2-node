'use strict';

const express = require('express'); // app server
const bodyParser = require('body-parser'); // parser for post requests
const Conversation = require('watson-developer-cloud/conversation/v1'); // watson sdk
const clarav2Session = require('./lib/clarav2-session.js');
//const claraCarModels = require('./lib/car-models.js');

const aerospike = require('./db/aerospike.js');
//const processUserInput = require('./process-user-input.js').processUserInput;
let dbStatusCode = 0;

var app = express();

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

clarav2Session.init(app);

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json());

require('./routes/conversation')(app);
require('./routes/speech-to-text')(app);

module.exports = app;
