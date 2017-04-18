'use strict';

const async = require('async');
// user input processor
const aerospike = require('../db/aerospike.js');
const clarav2Session = require('./clarav2-session.js');

const processPayload = function(error, payload){
  const conversationPayload = payload.payload;
  const callback = payload.callback;
  const requiredData = conversationPayload.context.dataParam;
  const data = payload.resultSet;
  if(requiredData != undefined){
    console.log('in if');
    switch (requiredData) {
      case 'customer':
        if(data != undefined && data.length>0){
          console.log(conversationPayload.input.text, data.payment_type);
          data = data[0];
          clarav2Session.setVal(payload.request, conversationPayload.context.conversation_id, 'customer_info', data);
          //console.log(payload.request.session);
          conversationPayload.input.text = data.payment_type;
          payload.payload = conversationPayload;
          //console.log(payload);
          callback(error, payload);
        } else {
          callback(error, payload);
        }
        break;
      case 'recall':
        console.log('checkcar model');
        if(data.carDetails === {}  && data.recallDetails === {}){
          conversationPayload.context.carModel = conversationPayload.input.text;
          conversationPayload.input.text = 'Not-Found'
          payload.payload = conversationPayload;
          //console.log(payload)
          callback(error, payload);
        } else if(data.carDetails.model != undefined && data.recallDetails === {}){
          //console.log('no data');
          conversationPayload.context.carModel = conversationPayload.input.text;
          conversationPayload.input.text = 'Non-Recall-Model';
          payload.payload = conversationPayload;
          callback(error, payload);
        } else if(data.carDetails.model != undefined && data.recallDetails.model_type !== undefined){
          //console.log('no data');
          conversationPayload.context.carModel = conversationPayload.input.text;
          conversationPayload.input.text = 'Recall-Model';
          payload.payload = conversationPayload;
          callback(error, payload);
        }
        break;
      default:
        callback(error, payload);
    }
  } else {
    console.log('in else');
    callback(error, payload);
  }
};

const processUserInput = {
    init: function(payload, callback){
      const conversationPayload = payload.payload;
      payload.callback = callback;
      const requiredData = conversationPayload.context.dataParam;
      switch (requiredData) {
        case 'customer':
          //this.checkUserInputIsVehicleNumber(payload, callback);
          this.getUserInfoByVehiclNo(conversationPayload.input.text, payload, processPayload);
          break;
        case 'recall':
          let carModel = conversationPayload.input.text;
          let carDetails = {carDetails:{},recallDetails: {}};
          let carModelEntities = this.getEntityDefinitions('car_model');
          let carRecallEntities = this.getEntityDefinitions('check_recall_model');
          //this.getVehicleDetailsByModel(conversationPayload.input.text, payload, processPayload);
          async.waterfall(
            [ // check whether call model is exist
              function(callback){
                console.log('in async');
                aerospike.queryRecord('dev', 'price', carModelEntities, 'model', carModel, payload, callback);
              },
              // if car model exist check whether its a recall model
              function(payload, callback){
                console.log('in async1');
                let resultSet = payload.resultSet;
                let error = payload.error;
                if(resultSet.length){
                  console.log('%%%%%%%%');
                  carDetails.carDetails = resultSet[0];
                  aerospike.queryRecord('dev', 'vehicle_recall', carRecallEntities, 'model_type', carModel, payload, callback);
                } else if(error==={}){
                  console.log('**********');
                  callback({}, carDetails);
                }
              }
            ],
            // callback
            (error, result) => {
              var resultSet = carDetails;
              //console.log(result);
              console.log('-------------');
              var recallResult = result.resultSet || {};
              if(recallResult.length){
                console.log('$$$$$$$$');
                carDetails.recallDetails = recallResult[0];
                resultSet = carDetails;
              } else if(error==={} && carDetails.carDetails.length){
                resultSet = carDetails;
              }
              result.resultSet = resultSet;
              //console.log(result.resultSet);
              processPayload(error, result);
            });
          break;
        default:
          callback(payload);
      }
    },
    getEntityDefinitions: function(entity){
      switch (entity){
        case 'customer':
          return ['vehicle_no', 'payment_type', 'model_id', 'class_id', 'city', 'marital_sts', 'first_name', 'last_name'];
        case 'car_model':
          return ['model', 'price'];
        case 'check_recall_model':
          return ['model_type', 'to', 'from'];
      }
    },
    getUserInfoByVehiclNo: function(vehicle_no, payload, callback){
      aerospike.queryRecord('dev', 'customer_data', this.getEntityDefinitions('customer'), 'vehicle_no', vehicle_no, payload, callback);
    },
    getVehicleDetailsByModel: function(carModel, payload, callback){
        aerospike.queryRecord('dev', 'price', this.getEntityDefinitions('car_model'), 'model', carModel, payload);
    }
}
module.exports = processUserInput;
