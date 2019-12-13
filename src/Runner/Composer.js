const fs = require('fs');
const path = require('path');
const Runner = require('./Runner');

/**
 *
 */
class Composer extends Runner {

    /**
     *
     * @return {Composer}
     */
    constructor(settings) {

        super(settings);

        try {
            this.projectFile = require(path.resolve(this.projectPath, 'composer.json'));
        } catch (e) {
            this.projectFile = {};
        }

        this.scripts = this._getScripts();
    }

    _getScripts() {
        return 'scripts' in this.projectFile ? this.projectFile.scripts : {};
    }

    formatCommand(scriptName) {
        return {
            command: 'composer',
            args: ['run-script', scriptName]
        };
    }
}

module.exports = Composer;
