let badgeData = require('./src/modules/badges.js');
let inquirer = require('inquirer');
let questionSet = require('./src/modules/questions')
let userInterface = require('./src/modules/userInterface')

// async cliPrompt (questionSet) returns 
cliPrompt = inquirer.prompt(questionSet).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
  