// validate that user input is not an empty answer or just spaces
function IsAnswerGivenNotEmpty (userInput) {
    if (userInput == "true") return true;
    else return "You must give an answer.";
}

// the set of questions to ask
let questionSet = [

    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is the GitHub user name to attach to the project? (Required)'
    },

    {
        type: 'input',
        name: 'projectTitle',
        message: 'What would you like the project title to be? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'editor',
        name: 'projectDescription',
        message: 'How would you describe your project? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'editor',
        name: 'features',
        message: 'What features does your project have?'
    },

    {
        type: 'confirm',
        name: 'tableOfContents',
        message: 'Do you want the readme to have a table of contents? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'editor',
        name: 'installationInstructions',
        message: 'What are your installation instructions? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'editor',
        name: 'usageInstructions',
        message: 'What are your useage instructions? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'choice',
        name: 'licenseType',
        message: 'What type of license will this project use? (Required)',
        choices: [],
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'editor',
        name: 'contributions',
        message: 'What are your contribution guidelines? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'editor',
        name: 'credits',
        message: 'Who would you like to give credit to?'
    },
    {
        type: 'editor',
        name: 'testInstructions',
        message: 'What are your test instructions? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    },

    {
        type: 'input',
        name: 'questionsForYou',
        message: 'What email should questions be sent to? (Required)',
        validate: (answer) => IsAnswerGivenNotEmpty(answer)
    }
]
// console.log(questionSet);
module.exports = questionSet;