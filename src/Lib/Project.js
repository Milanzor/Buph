const fs = require('fs');
const path = require('path');
const Composer = require('../Runner/Composer');
const Node = require('../Runner/Node');

/**
 *
 */
class Project {

    /**
     *
     * @param projectName
     * @param projectPath
     */
    constructor(projectName, projectPath) {

        this.projectName = projectName;

        this.projectPath = projectPath;

        if (!fs.existsSync(this.projectPath)) {
            throw new Error(`Failed to initialize Project with path ${this.projectPath}`);
        }

        this.Runners = this.RunnerFactory();
        if ('Composer' in this.Runners) {
            this.Runners.Composer.run('hello-world');
        }
    }

    RunnerFactory() {

        let runners = {};

        if (fs.existsSync(path.resolve(this.projectPath, 'composer.json'))) {
            runners.Composer = new Composer(this.projectPath);
        }

        if (fs.existsSync(path.resolve(this.projectPath, 'package.json'))) {
            runners.Node = new Node(this.projectPath);
        }

        return runners;
    }

}

module.exports = Project;
