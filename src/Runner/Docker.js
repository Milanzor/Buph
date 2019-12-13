const fs = require('fs');
const path = require('path');
const Runner = require('./Runner');

/**
 *
 */
class Docker extends Runner {

    /**
     *
     * @return {Docker}
     */
    constructor(settings) {

        super(settings);

        try {
            this.projectFile = require(path.resolve(this.projectPath, 'docker-scripts.json'));
        } catch (e) {
            this.projectFile = {};
        }

        this.scripts = this._getScripts();
    }

    _getScripts() {
        return 'scripts' in this.projectFile ? this.projectFile.scripts : {};
    }

    formatCommand(scriptName) {
        let {container_name, run_as, internal_path} = this.projectFile;

        let args = ['exec'];

        if (!process.stdin.isTTY) {
            args.push('-it');
        }

        args.push(container_name);

        if (run_as) {
            args = args.concat(['su', run_as, '-s']);
        }

        let script_cmd = this.getScriptCommand(scriptName);
        if (internal_path) {
            script_cmd = `cd ${internal_path} && ${script_cmd}`;
        }

        args = args.concat(['/bin/bash', '-c', script_cmd]);

        return {
            command: 'docker',
            args: args
        };
    }
}

module.exports = Docker;

