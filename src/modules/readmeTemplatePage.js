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

${licenseDescription}
`;
