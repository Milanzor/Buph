const fs = require('fs');
const path = require('path');
const RunnerFactory = require('../Factory/RunnerFactory');
const RunnerCollection = require('../Collection/RunnerCollection');

const Composer = require('../Runner/Composer');
const Node = require('../Runner/Node');
const Docker = require('../Runner/Docker');

/**
 *
 */
class Project {

    /**
     *
     * @param settings
     */
    constructor(settings) {

        const {projectName, projectPath} = settings;

        if (!fs.existsSync(projectPath)) {
            throw new Error(`Failed to initialize Project with path ${projectPath}`);
        }

        if (fs.existsSync(path.resolve(projectPath, 'composer.json'))) {
            let composerRunner = RunnerFactory(Composer, {projectPath: projectPath}, projectName);
            composerRunner.run('whoami');

        }

        if (fs.existsSync(path.resolve(projectPath, 'package.json'))) {
            let nodeRunner = RunnerFactory(Node, {projectPath: projectPath}, projectName);
            nodeRunner.run('whoami');
        }

        if (fs.existsSync(path.resolve(projectPath, 'docker-scripts.json'))) {
            let dockerRunner = RunnerFactory(Docker, {projectPath: projectPath}, projectName);
            dockerRunner.run('whoami');
        }

    }

}

module.exports = Project;
