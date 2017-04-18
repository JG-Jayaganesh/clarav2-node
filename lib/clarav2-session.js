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
    const sess = req.session[conversationId];
    if(sess != undefined){
      return req.session[conversationId];
    } else {
      req.session[conversationId] = {}
    }
    console.log('session set');
  },
  setVal: function(req, conversationId, key, val){
    const sess = req.session[conversationId];
    if(sess != undefined){
      sess[key] = val;
      req.session[conversationId] = sess;
      return true;
    } else {
      return false;
    }
  },
  getVal: function(req, conversationId, key){
    const sess = req.session[conversationId];
    if(sess != undefined){
      return sess[key];
    } else {
      return "";
    }
  }
}

module.exports = clarav2Session;
