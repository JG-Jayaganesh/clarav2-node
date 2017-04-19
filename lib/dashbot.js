'use strict';

if (!process.env.DASHBOT_API_KEY_GENERIC) {
  throw new Error('"DASHBOT_API_KEY_GENERIC" environment variable must be defined');
}

const async = require('async');
const request = require('request');
const sess = require('./clarav2-session.js');

var readline = require('readline');
var version = '0.8.2-rest';

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let dialogue = {
  incoming:"",
  outgoing: "",
  userId: ""
};

let requestParams = {
  uri: process.env.DASHBOT_URL_ROOT,
  qs : {
    type: '',
    platform: 'generic',
    apiKey: process.env.DASHBOT_API_KEY_GENERIC,
    v: version
  },
  method: 'POST',
  json: {
    text: '',
    userId: ''
  }
}

let appSession = {session: {}, sessionID: ""};
let userID = "";

var saveIncomingToClara = function(){
  //console.log('incoming dashbot');
  let incomingRequestParams = requestParams;
  incomingRequestParams.qs.type = 'incoming';
  incomingRequestParams.json.text = dialogue.incoming;

  if(dialogue.incoming != ""){
    request(incomingRequestParams, (error, response, body) => {
      saveOutgoingFromClara();
    });
  } else {
    saveOutgoingFromClara();
  }
}

let dummyCallback = function(error, data){
  console.log('------- dashbot saved this conversation --------');
  //console.log(error, data);
}

var saveOutgoingFromClara = function(){
  console.log('outgoing dashbot');
  let outgoingRequestParams = requestParams;
  outgoingRequestParams.qs.type = 'outgoing';
  outgoingRequestParams.json.text = dialogue.outgoing;
  //console.log(outgoingRequestParams);
  if(dialogue.outgoing != ""){
    request(outgoingRequestParams, (error, response, body)=>{
      dummyCallback({}, 'outgoingDone');
    });
  } else{
    dummyCallback({}, 'outgoingDone');
  }
}

exports.saveToDashbot = function(data){
  dialogue.incoming = data.incoming;
  dialogue.outgoing = data.outgoing;
  appSession.session = data.session;
  appSession.sessionID = data.sessionID;
  userID = appSession.sessionID + '___' + sess.getVal(appSession.session, 'conversation-id');
  requestParams.json.userId = userID;
  saveIncomingToClara();
}
