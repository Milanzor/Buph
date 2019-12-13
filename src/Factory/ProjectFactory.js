const Factory = require('./Factory');
const ProjectCollection = require('../Collection/ProjectCollection');
const Project = require('../Lib/Project');

/**
 * @param identifier
 * @param constructorParameters
 */
module.exports = function(constructorParameters, identifier) {
    return Factory(ProjectCollection, Project, constructorParameters, identifier);
};
