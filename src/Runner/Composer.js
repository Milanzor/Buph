const fs = require('fs');
const path = require('path');
const shelljs = require('shelljs');

/**
 *
 */
class Composer {

    /**
     *
     * @return {Composer}
     */
    constructor(projectPath) {

        this.projectPath = projectPath;
        try {
            this.composerFile = require(path.resolve(projectPath, 'composer.json'));
        } catch (e) {
            this.composerFile = {};
        }

        this.scripts = this._getScripts();
    }

    _getScripts() {
        return 'scripts' in this.composerFile ? this.composerFile.scripts : {};
    }

    run(scriptName) {
        if (scriptName in this.scripts) {
            shelljs.cd(this.projectPath);
            let running = shelljs.exec(`composer ${scriptName}`, {async: true, silent: true});
            running.stdout.on('data', function(data) {
                console.log(data);
            });
        }
    }
}


module.exports = Composer;
