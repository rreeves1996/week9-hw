// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    ['Enter title of project: ', 'title'],
    ['Project description: ', 'description'],
    ['Install instructions: ', 'instructions'],
    ['Usage information: ', 'usage'],
    ['Contributor guidelines: ', 'contribute'],
    ['Testing guidelines: ', 'testing'],
    ['License: ', 'license', ["Free use", "MIT License", "Closed source", "N/A"]]
];

const promptUser = () => {
    inquirer.prompt([
    {
      type: 'input',
      message: questions[0][0],
      name: questions[0][1],
    },
    {
        type: 'input',
        message: questions[1][0],
        name: questions[1][1],
    },
    {
        type: 'input',
        message: questions[2][0],
        name: questions[2][1],
    },
    {
        type: 'input',
        message: questions[3][0],
        name: questions[3][1],
    },
    {
        type: 'input',
        message: questions[4][0],
        name: questions[5][1],
    },
    {
        type: 'input',
        message: questions[6][0],
        name: questions[6][1],
    },
    {
      type: 'list',
      message: questions[7][0],
      name: questions[7][1],
      choices: questions[7][2],
    },
  ])
  .then((reponse) => {
    const filename = `README.md`;

    writeToFile(filename);
  })};

// TODO: Create a function to write README file
function writeToFile(filename, response) {

};

// TODO: Create a function to initialize app
function init() {
    promptUser();
};

// Function call to initialize app
init();
