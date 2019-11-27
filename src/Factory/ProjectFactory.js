const Factory = require('./Factory');
const ProjectCollection = require('../Collection/ProjectCollection');

/**
 *
 * @param classObj
 * @param identifier
 * @param constructorParameters
 */
module.exports = function(classObj, constructorParameters, identifier) {
    return Factory(ProjectCollection, classObj, constructorParameters, identifier);
};
