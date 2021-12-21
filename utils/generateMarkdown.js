
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

### License
![GitHub license](https://img.shields.io/badge/License-MIT-blue)
    
# Description
${data.description}

### Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)
* [Contributors](#contributors)
* [License](#license)
* 
* 
## Installation
    ${data.installation}

## Usage
    ${data.usage}

## Tests
    ${data.tests}

## Contributors
    ${data.contributors}

#### Questions
<a href="mailto:${data.email}">If you have any questions please reach out to me:</a>
    `;
}

module.exports = generateMarkdown;