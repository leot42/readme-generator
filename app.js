let badgeData = require('./src/modules/licenseData.js');
const inquirer = require('inquirer');
const questionSet = require('./src/modules/questions');
let userInterface = require('./src/modules/userInterface');
const ReadMeTemplate = require('./src/modules/readmeTemplatePage');
const fs = require('fs');
const fileDestination = './GeneratedFiles';
const generatedFileTypeSuffix = ".md";

// Given a file name and data write to folderDestination of type generatedFileTypeSuffix
function writeToFile(fileName, data) {

  let filePath = `${fileDestination}/${fileName}${generatedFileTypeSuffix}`;
  fs.writeFile(filePath, data, function (err) {
    if (err) throw err;
    console.log('Your readme was created in the GeneratedFiles folder.');
  });
}

// TODO: Create a function to initialize app
function init(questionSet, fileDestination) {
  // console.log(questionSet[0].choices);
  inquirer.prompt(questionSet).then((answers) => {
    generatedText = ReadMeTemplate(answers);

    writeToFile(fileDestination,generatedText);

  });

}
// Function call to initialize app
init(questionSet, fileDestination);
