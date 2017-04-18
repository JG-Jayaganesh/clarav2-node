'use strict';

const KerasJS = require('keras-js');
var polyFill = require('babel-polyfill');

const model = new KerasJS.Model({
  filepaths: {
    model: '/home/nsk/workspace/projects/clara-v2/lib/data-model/model_type.json',
    weights: '/home/nsk/workspace/projects/clara-v2/lib/data-model/model_type_weights.buf',
    metadata: '/home/nsk/workspace/projects/clara-v2/lib/data-model/model_type_metadata.json'
  },
  filesystem: true
});

var claraDataModel = function(data, callback){
  var m = model;
  console.log(m);
}

module.exports = claraDataModel;
