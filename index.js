// Include packages
const fs = require('fs');
const inquirer = require('inquirer');
const { generateHTML } = require('./src/generateHTML');
const path = require('path');

// create questions arrays
// Manager Questions Array
const managerQuestions = [
    {
        type: "input", 
        name: "name",
        message: "What is the new Team Manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the new Team Manager's employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the new Team Manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the new Team Manager's Office Number?"
    },
    {
        type: "list",
        name: "newMember",
        message: "Would you like to add an Engineer or Intern?",
        choices: ["Engineer", "Intern"]
    },
]
// Engineer questions array
const engineerQuestions =
[
    {
        type: "input", 
        name: "name",
        message: "What is the new Team Engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the new Team Engineer's employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the new Team Engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the link to the new Team Engineer's GitHub Profile?"
    },
    {
        type: "list",
        name: "newMember",
        message: "Would you like to add an Engineer or Intern?",
        choices: ["Engineer", "Intern"]
    },
]

// Intern Qeustions array
[
    {
        type: "input", 
        name: "name",
        message: "What is the new Team Intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the new Team Intern's employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the new Team Intern's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What school is the new Team Intern from?"
    }
]

// create a function to write the HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// create intialize function
function init() {
    inquirer.prompt(managerQuestions)
        .then((answer) => {
            console.log(answer)
            writeToFile('./dist/index.html', generateHTML(answer))
        })
}

init();