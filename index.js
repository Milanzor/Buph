const RunnerFactory = require('./src/Factory/RunnerFactory');

class Test {
    woop() {
        console.log('Woop');
    }
}

RunnerFactory(Test).woop();
process.exit(0);

// Fetch projects file
let projectList = require('./projects.json');

let Project = require('./src/Lib/Project');

const path = require('path');

Object.keys(projectList).forEach(function(projectName) {
    new Project(projectName, path.resolve(projectList[projectName]));
});
