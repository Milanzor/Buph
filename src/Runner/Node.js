const fs = require('fs');
const path = require('path');
const shelljs = require('shelljs');

/**
 *
 */
class Node {

    /**
     *
     * @return {Node}
     */
    constructor(projectPath) {

        this.projectPath = projectPath;
        try {
            this.packageFile = require(path.resolve(projectPath, 'package.json'));
        } catch (e) {
            this.packageFile = {};
        }

        this.scripts = this._getScripts();
    }

    _getScripts() {
        return 'scripts' in this.packageFile ? this.packageFile.scripts : {};
    }

    run(scriptName) {
        if (scriptName in this.scripts) {
            shelljs.cd(this.projectPath);
            let run = shelljs.exec(`npm run ${scriptName}`);
        }
    }
}

module.exports = Node;
