// user input processor
var aerospike = require('./db/aerospike.js');

exports.processUserInput = {
    init: function(payload, callback){
      this.checkUserInputIsVehicleNumber(payload, callback);
    },
    getUserInfoByVehiclNo: function(vehicle_no, callback){
      var cust_data = function(record){
        return ['vehicle_no', 'payment_type', 'model_id', 'class_id', 'city', 'marital_sts', 'first_name', 'last_name'];
      };
      aerospike.queryRecord('dev', 'customer_data', cust_data(), 'vehicle_no', vehicle_no, callback);
    },
    checkUserInputIsVehicleNumber: function(payload, callback){
      var context = payload.context;
      var input = payload.input;
      var output = {};
      if(typeof context.customer != 'undefined' && context.customer == 'Existing'){
        //console.log(input);
        this.getUserInfoByVehiclNo(input.text, callback);
      } else {
        callback(payload, payload.input.text)
      }
    }
}
