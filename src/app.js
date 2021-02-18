const licenseData = require('./modules/licenseData.js');
const inquirer = require('inquirer');
const questionSet = require('./modules/questions');
const ReadMeTemplate = require('./modules/readmeTemplatePage');
const fs = require('fs');
const fileDestination = './assets/GeneratedFiles';
const fileName = 'README';
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
function init(questionSet, fileName) {
  inquirer.prompt(questionSet).then((answers) => {
    answers.clickableBadgeIconlink = licenseData.licenseTypeCollection[answers.licenseTypeDescription].clickableBadgeIconlink;
    generatedText = ReadMeTemplate(answers);

    writeToFile(fileName,generatedText);

  });

}
// Function call to initialize app
init(questionSet, fileName);