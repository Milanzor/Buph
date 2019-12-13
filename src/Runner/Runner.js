const path = require('path');
const eventEmitter = require('events');
const {spawn} = require('child_process');

/**
 * Class Runner
 */
class Runner extends eventEmitter {

    /**
     *
     * @return {Composer}
     */
    constructor(settings) {
        super();

        // Set project path
        const {projectPath} = settings;
        this.projectPath = projectPath;

        try {
            this.buphSettings = require(path.resolve(this.projectPath, '.buph'));
        } catch (e) {
            this.buphSettings = {};
        }

        // Default
        this.scripts = {};
    }

    run(scriptName) {

        // Check if the runner even has the script
        if (!this.scripts.hasOwnProperty(scriptName)) {
            return false;
        }

        try {

            const {command, args} = this.formatCommand(scriptName);

            // Spawn the process
            const proc = spawn(
                command,
                args,
                {
                    cwd: this.projectPath,
                    uid: this.buphSettings.run_as || null,
                    windowsHide: true
                }
            );

            proc.stdout.on('data', (data) => {
                console.log(`${data}`);
            });
            proc.stderr.on('data', (data) => {
                console.log(`${data}`);
            });
        } catch (e) {
            console.log(e);
        }
    }

    formatCommand(scriptName) {
        return {
            command: 'echo',
            args: ['No formatCommand implemented in current Runner']
        };
    }

    getScriptCommand(script) {
        return this.scripts[script];
    }
}

module.exports = Runner;
