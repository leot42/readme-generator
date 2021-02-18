const licenseData = require('./src/modules/licenseData.js');
const inquirer = require('inquirer');
const questionSet = require('./src/modules/questions');
let userInterface = require('./src/modules/userInterface');
const ReadMeTemplate = require('./src/modules/readmeTemplatePage');
const fs = require('fs');
const fileDestination = './src/assets/GeneratedFiles';
const fileName = 'README';
const generatedFileTypeSuffix = ".md";

// given a licenseTypeKey and licenseCollectionData, add the clickableBadgeIconlink to the data obj
// function AddTheClickableBadgeIconlink(licenseCollectionData, )

// Given a file name and data write to folderDestination of type generatedFileTypeSuffix
function writeToFile(fileName, data) {

  let filePath = `${fileDestination}/${fileName}${generatedFileTypeSuffix}`;
  console.log(filePath);
  fs.writeFile(filePath, data, function (err) {
    if (err) throw err;
    console.log('Your readme was created in the GeneratedFiles folder.');
  });
}

// TODO: Create a function to initialize app
function init(questionSet, fileName) {
  // console.log(questionSet[0].choices);
  inquirer.prompt(questionSet).then((answers) => {
    answers.clickableBadgeIconlink = licenseData.licenseTypeCollection[answers.licenseTypeDescription].clickableBadgeIconlink;
    console.log(answers.licenseTypeDescription);
    console.log(answers.clickableBadgeIconlink);
    generatedText = ReadMeTemplate(answers);

    writeToFile(fileName,generatedText);

  });

}
// Function call to initialize app
init(questionSet, fileName);
