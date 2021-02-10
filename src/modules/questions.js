let projectTitle = {title: "", body: "", required: true};
let projectDescription = {title: "Description", body: "", required: false};
let features = {title: "Features", body: "", required: false};
let tableOfContents = {title: "Table of Contents", body: "", required: false};
let installation = {title: "Installation", body: "", required: true};
let usage = {title: "## " + "Usage", body: "", required: true};
let license = {title: "## " + "License", body: "", required: true};
let contributing = { title: "## " +  "Contributing", body: "", required: false};
let credits = { title: "## " +  "Contributing", body: "", required: false};
let tests = {title: "## Tests", body: "", required: false};
let questions = {title: "## Questions", body: "", required: false};

let badges = {}

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


// questions

let getGithubUsername = {
    type: 'input',
    name: 'gitHubUserName',
    message: 'What would you like the project title to be?' 
}

let getProjectTitle = {
    type: 'input',
    name: 'projectTitle',
    message: 'What would you like the project title to be?' 
}

let getProjectDescription = {
    type: 'editor',
    name: 'projectDescription',
    message: 'How would you describe ypur project?' 
}

let getFeatures = {
    type: 'editor',
    name: 'features',
    message: 'What features does your project have?' 
}

let getTableOfContents = {
    type: 'input',
    name: 'tableOfContents',
    message: 'Do you want the readme to have a table of contents?' 
}

let getInstallationInstructions = {
    type: 'editor',
    name: 'installationInstructions',
    message: 'What are your installation instructions' 
}

let getUsage = {
    type: 'editor',
    name: 'usageInstructions',
    message: 'What are your useage instructions' 
}

let getLicense = {
    type: 'choice',
    name: 'licenseType',
    message: 'What type of license will this project use',
    choices: []
}

let getContributing = {
    type: 'input',
    name: 'contributions',
    message: 'What are your contribution guidelines?' 
}

let getCredits = {
    type: 'editor',
    name: 'credits',
    message: 'Who would you like to give credit to?' 
}

let getTests = {
    type: 'editor',
    name: 'testInstructions',
    message: 'What are your test instructions?'
}

let getQuestions = {
    type: 'input',
    name: 'questions',
    message: 'What email should questions be sent to?' 
}