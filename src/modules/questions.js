let questionSet = [

    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is the GitHub user name to attach to the project?'
    },

    {
        type: 'input',
        name: 'projectTitle',
        message: 'What would you like the project title to be?'
    },

    {
        type: 'editor',
        name: 'projectDescription',
        message: 'How would you describe your project?'
    },

    {
        type: 'editor',
        name: 'features',
        message: 'What features does your project have?'
    },

    {
        type: 'confirm',
        name: 'tableOfContents',
        message: 'Do you want the readme to have a table of contents?'
    },

    {
        type: 'editor',
        name: 'installationInstructions',
        message: 'What are your installation instructions'
    },

    {
        type: 'editor',
        name: 'usageInstructions',
        message: 'What are your useage instructions'
    },

    {
        type: 'choice',
        name: 'licenseType',
        message: 'What type of license will this project use',
        choices: []
    },

    {
        type: 'editor',
        name: 'contributions',
        message: 'What are your contribution guidelines?'
    },

    {
        type: 'editor',
        name: 'credits',
        message: 'Who would you like to give credit to?'
    },
    {
        type: 'editor',
        name: 'testInstructions',
        message: 'What are your test instructions?'
    },

    {
        type: 'input',
        name: 'questionsForYou',
        message: 'What email should questions be sent to?'
    }
]
// console.log(questionSet);
module.exports = questionSet;