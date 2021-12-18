// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
// Array of questions for user
const promptUser = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Name? (Required)',
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Provide the steps for installation:",
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide some information about your application usage:',
    },
    {
        type: "input",
        name: "tests",
        message: "Provide instructions for testing your application:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username:"
    },
    {
        type: "input",
        name: "link",
        message: "Provide the link to your GitHub:"
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email address"
    },
    {
        type: "input",
        name: "contributors",
        message: "List all contributing authors",
    },
    {
        type: "checkbox",
        name: "licenses",
        choices: [
            "MIT License",
            "Mozilla Public License 2.0",
            "Apache 2.0 License",
            "Boost Software License 1.0"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// Function to initialize application and get array of questions to generate in the terminal
function init() {
    inquirer.prompt(promptUser)
    .then(function(data){
        writeToFile("README-GENERATOR", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
