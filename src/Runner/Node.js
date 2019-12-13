const fs = require('fs');
const path = require('path');
const Runner = require('./Runner');

/**
 *
 */
class Node extends Runner {

    /**
     *
     * @return {Node}
     */
    constructor(settings) {

        super(settings);

        try {
            this.projectFile = require(path.resolve(this.projectPath, 'package.json'));
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
            command: 'npm',
            args: ['run', scriptName]
        };
    }
}

module.exports = Node;
