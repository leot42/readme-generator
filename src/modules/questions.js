let projectTitle = { title: "", body: "", required: true };
let projectDescription = { title: "Description", body: "", required: false };
let features = { title: "Features", body: "", required: false };
let tableOfContents = { title: "Table of Contents", body: "", required: false };
let installation = { title: "Installation", body: "", required: true };
let usage = { title: "## " + "Usage", body: "", required: true };
let license = { title: "## " + "License", body: "", required: true };
let contributing = { title: "## " + "Contributing", body: "", required: false };
let credits = { title: "## " + "Contributing", body: "", required: false };
let tests = { title: "## Tests", body: "", required: false };
let questions = { title: "## Questions", body: "", required: false };

let template = `
# ${projectTitle.title}

## ${projectDescription.title}

${projectDescription.body}

## ${features.title}

${features.body}

## ${tableOfContents.title}

${tableOfContents.body}

## ${installation.title}

${installation.body}

## ${tests.title}

${tests.body}

## ${questions.title}

${questions.body}

## ${usage.title}

${usage.body}

## ${credits.title}
${credits.body}

## ${license.title}

${license.body}
`;


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