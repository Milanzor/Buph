// Fetch projects file
let projectList = require('./projects.json');
const ProjectFactory = require('./src/Factory/ProjectFactory');
const path = require('path');

Object.keys(projectList).forEach(function(projectName) {
    ProjectFactory({projectPath: path.resolve(projectList[projectName]), projectName: projectName}, projectName);
});

// Thx SO
// setInterval(() => {}, 1 << 30);
