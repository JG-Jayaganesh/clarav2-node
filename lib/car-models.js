'use strict';

require('path');
const KerasJS = require('keras-js');
//const async = require('async');
var polyFill = require('babel-polyfill');
var ndarray = require('ndarray');
var vehicletopK = require('./utils.js').vehicletopK;

const exePath = process.cwd();
//console.log(exePath);
const modelFiles = {
  model: exePath+process.env.MODEL_JSON,
  weights: exePath+process.env.MODEL_WEIGHTS,
  metadata: exePath+process.env.MODEL_METADATA
}

const model = new KerasJS.Model({
  filepaths: modelFiles,
  filesystem: true
});

var claraDataModel = {
  m: model,
  getCarModels: function(data, callback){
    var reqData = data.userDetails;
    var noSuggestion = data.noSuggestion;
    var car_model = this.m;
    var car;
    car_model.ready().then(() => {
      const inputData = {
        'input': new Float32Array([3, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1])
      }
      car_model.predict(inputData).then(outputData => {
        //console.log('aasdf');
          const topK = vehicletopK(outputData['output']);
          //console.log(topK);
          //console.log('asdfsd');
          //console.log(topK);
          callback({}, topK);
          //return topK;
      })
      .catch(err => {
          console.log('predict error:', err)
      })
    })
    .catch(err => {
      console.log('model error:', err)
    });
    //return car;
    // async.waterfall([
    //   function(callback){
    //
    //   }
    // ], (err, data)=>{
    //   console.log(data);
    // });
  }
}

module.exports = claraDataModel;
