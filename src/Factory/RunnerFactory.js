const Factory = require('./Factory');
const RunnerCollection = require('../Collection/RunnerCollection');

/**
 *
 * @param classObj
 * @param constructorParameters
 * @param identifier
 */
module.exports = function(classObj, constructorParameters, identifier) {
    return Factory(RunnerCollection, classObj, constructorParameters, identifier);
};
