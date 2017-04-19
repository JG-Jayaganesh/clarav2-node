'use strict';

const KerasJS = require('keras-js');
var polyFill = require('babel-polyfill');
var ndarray = require('ndarray');
var vehicletopK = require('./utils.js').vehicletopK; 

const model = new KerasJS.Model({
  filepaths: {
    model: '/home/azureuser/clara-deeplearning/data/models/model_type.json',
    weights: '/home/azureuser/clara-deeplearning/data/models/model_type_weights.buf',
    metadata: '/home/azureuser/clara-deeplearning/data/models/model_type_metadata.json'
  },
  filesystem: true
});

model.ready()
  .then(() => {
    const inputData = { 
      'input': new Float32Array([3, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1]) 
    }

   model.predict(inputData)
      .then(outputData => {
        const topK = vehicletopK(outputData['output']);
        //var outputData = JSON.stringify(outputData);
	})
      .catch(err => {
        console.log('predict error:', err)
      })
  })
  .catch(err => {
    console.log('model error:', err)
  });

var claraDataModel = function(data, callback){
  var m = model;
  console.log(m);
}

module.exports = claraDataModel;
