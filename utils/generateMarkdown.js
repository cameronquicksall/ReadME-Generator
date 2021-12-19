
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

    ## Installation
    ${data.insallation}

    ## Usage
    ${data.usage}

    ## Tests
    ${data.tests}

    ## Contributors
    ${data.contributors}

    ## Questions
    All questions about this application can be sent to: \n
        <a href="${data.link}">${data.github}</a> \n
        <a href="mailto:${data.email}">${data.email}</a>
    `;
}

module.exports = generateMarkdown;