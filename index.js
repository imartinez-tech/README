// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
//TODO: const questions = [];
// TODO: Create an array of questions for user input

const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What's the title ?",
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email ?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'what is your Github username ?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe the application',
    },
    {
      type: 'input',
      name: 'license',
      message: 'choose a license',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What should be the command to install dependecies ?',
      default: 'npm i',
    },
    {
      type: 'input', 
      name: 'test',
      message: 'What command should be used to run test ?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Any information for the user of the repository ?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Any guidlines for contribution',
    },

    
  ];
  inquirer.prompt(questions).then((answers) => {
    return fs.writeFile("NEWREADME.md", generateMarkdown({ ...answers }), (err) => {
        if (err) {
            console.log(err)
        }
    })
    console.log(JSON.stringify(answers, null, '  '));
    console.log("answers", answers);
    console.log("Name: ", answers.title)
    console.log("Location: ", answers.description)
    //writeToFile("sample.md", answers)
  });
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     console.log(data)
     fs.writeFileSync(fileName, generateMarkdown({ ...data }))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses}));
  });
}

init();