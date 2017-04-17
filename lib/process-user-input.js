'use strict';

// user input processor
const aerospike = require('../db/aerospike.js');
const clarav2Session = require('./clarav2-session.js');

const processPayload = function(payload, data){
  const conversationPayload = payload.payload;
  const callback = payload.callback;
  const requiredData = conversationPayload.context.dataParam;
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
          callback(payload);
        } else {
          callback(payload);
        }
        break;
      case 'recall':
        console.log('checkcar model');
        if(data != undefined && data.length>0){
          console.log(conversationPayload.input.text, data);
          data = data[0];
          conversationPayload.context.carModel = conversationPayload.input.text;
          conversationPayload.input.text = 'Recall-Model'
          payload.payload = conversationPayload;
          //console.log(payload)
          callback(payload);
        } else {
          console.log('no data');
          conversationPayload.context.carModel = conversationPayload.input.text;
          conversationPayload.input.text = 'Non-Recall-Model';
          payload.payload = conversationPayload;
          callback(payload);
        }
        break;
      default:
        callback(payload);
    }
  } else {
    console.log('in else');
    callback(payload);
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
          //this.getVehicleDetailsByModel(conversationPayload.input.text, payload, processPayload);
          async(
            [ // check whether call model is exist
              function(){
                this.getCarDetailsBy
              }, // if car model exist check whether its a recall model
              function(){

              }
            ],
            // callback
            (err, result) => {
              if(result.status === 0){

              }
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
          return ['model_type', 'to', 'from'];
      }
    },
    getUserInfoByVehiclNo: function(vehicle_no, payload, callback){
      aerospike.queryRecord('dev', 'customer_data', this.getEntityDefinitions('customer'), 'vehicle_no', vehicle_no, payload, callback);
    },
    getVehicleDetailsByModel: function(carModel, payload, callback){
      aerospike.queryRecord('dev', 'vehicle_recall', this.getEntityDefinitions('car_model'), 'model_type', carModel, payload, callback);
    }
}
module.exports = processUserInput;
