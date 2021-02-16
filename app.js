let badgeData = require('./src/modules/badges.js');
let inquirer = require('inquirer');
const questionSet = require('./src/modules/questions')
let userInterface = require('./src/modules/userInterface')

// async cliPrompt (questionSet) returns 
cliPrompt = inquirer.prompt(questionSet).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
