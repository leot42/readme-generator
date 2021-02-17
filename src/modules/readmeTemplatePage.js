function generateReadMeTemplate(data) {

    let template = `
# ${data.projectTitle}
======================
${data.clickableBadgeIconlink}
## Description
${data.projectDescription}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Features

${data.featuresDescription}


## Installation

${data.installationDescription}


## Tests

${data.testsDescription}


## Contact Me

${data.yourEmail}

## Usage

${data.usageDescription}


## Contributing

${data.contributionsDescription}


## Credits

${data.creditsDescription}

## License

${data.licenseTypeDescription}
`;
return template;
}
module.exports = generateReadMeTemplate;