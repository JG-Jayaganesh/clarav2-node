var isTypedArray = require('lodash/isTypedArray');
var reverse = require('lodash/reverse');
var sortBy = require('lodash/sortBy');
var take = require('lodash/take');
var vehicleClasses = require('./vehicleClasses').vehicleClasses;

exports.vehicletopK = function (classProbabilities, k = 1) {
  const probs = isTypedArray(classProbabilities) ? Array.prototype.slice.call(classProbabilities) : classProbabilities;
  //console.log(vehicleClasses);

  const sorted = reverse(
    sortBy(
      probs.map((prob, index) => [ prob, index ]),
      probIndex => probIndex[0]
    )
  );

  const topK = take(sorted, k).map(probIndex => {
    const iClass = vehicleClasses[probIndex[1]];
    //console.log(vehicleClasses[probIndex[1]])
    // return {
    //   id: probIndex[1],
    //   name: iClass.replace(/_/, ' '),
    //   probability: probIndex[0]
    // };
    return iClass.replace(/_/, ' ');
  });
  return {suggestedModels : topK};
};
