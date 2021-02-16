let badgeData = require('./src/modules/badges.js');
let inquirer = require('inquirer');
const questionSet = require('./src/modules/questions');
let userInterface = require('./src/modules/userInterface');
const ReadMeTemplate = require('./src/modules/readmeTemplatePage');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(questionSet) {
  inquirer.prompt(questionSet).then((answers) => {
 //test   console.log(JSON.stringify(answers, null, '  '));
    let text = ReadMeTemplate(answers);
  });

}

// Function call to initialize app
init(questionSet);
