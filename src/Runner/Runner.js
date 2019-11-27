const path = require('path');
const shelljs = require('shelljs');
const eventEmitter = require('events');

/**
 * Class Runner
 */
class Runner extends eventEmitter {

    /**
     *
     * @return {Composer}
     */
    constructor(projectPath) {
        super();

        this.projectPath = projectPath;
        try {
            this.composerFile = require(path.resolve(projectPath, 'composer.json'));
        } catch (e) {
            this.composerFile = {};
        }

        this.scripts = this._getScripts();
    }
}

module.exports = Runner;
