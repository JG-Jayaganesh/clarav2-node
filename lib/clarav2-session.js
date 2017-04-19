'use strict';

const session = require('express-session');
const AerospikeStore = require('aerospike-session-store')(session);
const clarav2Session =  {
  init: function(app){
    app.use(session({
      secret: '123456789QWERTY',
      store: new AerospikeStore({
        namespace: 'dev',
        set: 'clarav2-session',
        ttl: 86400, // 1 day
        hosts: '127.0.0.1:3000'
      }),
      resave: false,
      saveUninitialized: false
    }));
    console.log('aerospike session created!');
  },
  setConversation: function(req, conversationId){
    const sess = req.session;
    if(sess != undefined){
      return req.session['conversation-id'] = conversationId;
    } else {
      req.session['conversation-id']
    }
    console.log('session set');
  },
  setVal: function(session, key, val){
    const sess = session;
    if(sess != undefined){
      sess[key] = val;
      req.session = sess;
      return true;
    } else {
      return false;
    }
  },
  getVal: function(session, key){
    const sess = session;
    console.log('-----------sess get val----------');
    //console.log(req);
    if(sess != undefined){
      return sess[key];
    } else {
      return "";
    }
  }
}

module.exports = clarav2Session;
