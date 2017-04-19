'use strict';

const async = require('async');
// user input processor
const aerospike = require('../db/aerospike.js');
const clarav2Session = require('./clarav2-session.js');
const claraCarModels = require('./car-models.js');

const getSelectionDetailsFromContext = function(context){
  let userDetails = {
    'age':"",
    'marital_sts':"",
    'budget':"",
    'city':"",
    'fuel_type': "",
    'seat_capacity': ""
  };
  if(context.conversationEndFlag === 'newModelSelection'){
    userDetails = {
      'age':context.Age,
      'marital_sts':context.MaritalStatus,
      'budget':context.budget,
      'city':context.city,
      'fuel_type': context.fuelType,
      'seat_capacity': seatCapacity
    };
  }
  return userDetails;
};

let userDetailsForModel = '';

const sendResponse = function(err, data){
  data.callback(err, data.response, data);
}


var getModelSuggestion = function(callback){
  var car;
  claraCarModels.getCarModels(userDetailsForModel, callback);
  //console.log(car);
}
/*
var getOffers = function(data, callback){

}

var getRatings = function(data, callback){

}

getModelForUser(data){
  var suggestedModel = "";
  var modelOffer = "";
  var modelRatings = "";
  async.waterfall([
    getModelSuggestion(callback){

    },
    getOffers(data, callback){

    },
    getRatings(data, callback){

    }
  ], (err, data)=>{

  });
}
*/

const processClaraResponse = {
  init: function(data, callback){
    let requiredDataParam = data.resData.context.conversationEndFlag;
    let context = data.resData.context;
    let conversationPayload = data.payload;
    let conversationResponse = data.resData;
    data.callback = callback;
    var userDetails, existingDetails;
    //console.log(context);
    if(requiredDataParam!=undefined){
      if(context.User == 'new' && requiredDataParam == 'newModelSelection'){ // new customer
        userDetails = getSelectionDetailsFromContext(conversationPayload);

        userDetails.age = context.Age;
        userDetails.marital_sts = context.MaritalStatus;
        userDetails.budget = context.budget;
        userDetails.city = context.city;
        userDetails.fuel_type = context.fuelType;
        userDetails.seat_capacity = context.seatCapacity;

        data.userDetails = userDetails;
        // give this data to model suggestion module
        //console.log('new customer',userDetails);

        userDetailsForModel = userDetails;
        async.waterfall([
          getModelSuggestion
        ], (err, suggestedModels)=>{
          //suggestedModels = data;
          suggestedModels = suggestedModels.suggestedModels;
          //suggestedModels = suggestedModels.join(" or ");
          conversationResponse.output.text[0] = 'I think '+suggestedModels[0]+' will suit you well.'
          data.resData = conversationResponse;
          callback({}, data.response, data);
        });
        //console.log(suggestedModels);
        //getModelForUser(data);
        //callback({}, data.response, data);
      } else if(context.User == 'existing' && requiredDataParam == 'existingModelSelection'){
        //
        userDetails = getSelectionDetailsFromContext(conversationPayload);
        existingDetails = clarav2Session.getVal(data.request, 'customer_info');

        userDetails.age = existingDetails.age;
        userDetails.marital_sts = context.MaritalStatus;
        userDetails.budget = context.budget;
        userDetails.city = existingDetails.city;
        userDetails.fuel_type = context.fuelType;
        userDetails.seat_capacity = (existingDetails.marital_sts == 'Single') ? 1 : (existingDetails.no_of_child + (existingDetails.marital_sts == 'Married') ? 2 : 1) ;
        console.log('existing customer', userDetails);

        data.userDetails = userDetails;
        callback({}, data.response, data);
        //getModelForUser(data);
      } else {
        //console.log('its default!');
        callback({}, data.response, data);
      }
    } else {
      //console.log('its default!');
      callback({}, data.response, data);
    }
  },
  userModelSelection: function(){

  }
}
module.exports = processClaraResponse;
