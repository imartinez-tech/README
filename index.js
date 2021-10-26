// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
//TODO: const questions = [];
// TODO: Create an array of questions for user input

const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What's the title",
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
    // console.log(data)
    // fs.writeFile(fileName, generateMarkdown({ ...data }))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
