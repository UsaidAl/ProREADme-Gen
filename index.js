// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },

      {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the use of this project?'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please add any contributions:'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter any test instructions:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this application:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the email address:'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
        writeToFile("Template-Readme.md",generateMarkdown(responses))
    })
}

// Function call to initialize app
init();
