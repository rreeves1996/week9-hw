// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    ['Enter first and last name: ', 'name'],
    ['Enter email: ', 'email'],
    ['Enter title of project: ', 'title'],
    ['Project description: ', 'description'],
    ['Install instructions: ', 'instructions'],
    ['Usage information: ', 'usage'],
    ['Contributor guidelines: ', 'contribute'],
    ['Testing guidelines: ', 'testing'],
    ['License: ', 'license', ["APM", "AUR license", "Unlicense", "N/A"]]
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
        name: questions[4][1],
    },
    {
      type: 'input',
      message: questions[5][0],
      name: questions[5][1],
    },
    {
      type: 'input',
      message: questions[6][0],
      name: questions[6][1],
    },
    {
      type: 'input',
      message: questions[7][0],
      name: questions[7][1],
    },
    {
      type: 'list',
      message: questions[8][0],
      name: questions[8][1],
      choices: questions[8][2],
    },
  ])
  .then(response => {
    const filename = "README.md";

    generateMarkdown(response);
    writeToFile(filename, response);
  })};

// TODO: Create a function to write README file
function writeToFile(filename) {
  fs.appendFile(filename, "", (error) =>
  error ? console.error(error) : console.log("README successfully created!"));
};

// TODO: Create a function to initialize app
function init() {
    promptUser();
};

// Function call to initialize app
init();
