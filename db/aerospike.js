const Aerospike = require('aerospike');
const async = require('async');

const aerospikeConfig = require('../config/aerospike_config.js').aerospikeConfig();
const aerospikeDBParams = require('../config/aerospike_config.js').aerospikeDBParams({nameSpace:'dev',set_name:'customer_data'});

const client = Aerospike.client(aerospikeConfig);
const filter = Aerospike.filter;

// Establish connection to the cluster
exports.connect = function (callback) {
 client.connect(callback)
}

//console.log(aerospikeDBParams);

// Write a record
exports.writeRecord = function (set, k, v, callback) {

 var key = new Aerospike.Key(aerospikeDBParams.defaultNamespace, set, k);
 var bin = v;
 client.put(key, v, function (error, record) {
  // Check for errors
  if (error) {
   // An error occurred
   return callback(error)
  } else {
   return callback(null, 'ok');
  }
 })
}

// Read a record
/**
 * Reads a record from aerospike db
 * @param  {Object} random text
 * @param  {Object} query params to read data from aerospike based on the condition
 * @return {Object}          The response with the updated message
 */
exports.readRecord = function (set, k, callback) {
 var key = new Aerospike.Key('dev', 'customer_data', {});
 client.get(key, function (error, record) {
  // Check for errors
  if (error) {
   // An error occurred
   return callback(error)
  } else {
    console.log(record);
   return callback(null, record);
  }
 })
};

exports.queryRecord = function(nameSpace, set, fields, filterKey, filterVal, payload, callback){
    if(filterKey=='vehicle_no'){
      filterVal = parseInt(filterVal);
    }
    //console.log(fields);
    var query = client.query('dev', set, {}), resultSet = [];
    query.select(fields);
    query.where(Aerospike.filter.equal(filterKey, filterVal));
    var stream = query.foreach();

    //console.log(stream);
    stream.on('error', (error) => {
      console.log('ae error');
      console.error(error);
      payload.error = error;
      callback(error, payload);
      throw error
    });
    stream.on('data', (record)=> {
      //console.log('ae record');
      //console.info(record);
      resultSet.push(record);
    });
    stream.on('end', ()=>{
      console.log('~~~~~~~~~~~~');
      //console.log(resultSet);
      //payload.resultSet = {};
      payload.resultSet = resultSet;
      payload.error = {};
      //console.log('ae close');
      callback(null, payload);
    });
};
