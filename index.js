// Include packages
const fs = require('fs');
const inquirer = require('inquirer');
const { generateHTML } = require('./src/generateHTML');
const path = require('path');

// create questions array
const questions = [
    {
        type: "input",  
        name: "name",
        message: "What is the new Team Member's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the new Team Member's id number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the new Team Member's email?"
    },
    {
        type: "checkbox",
        name: "role",
        message: "What is the new Team Member's role?",
        choices: ["Manager", "Engineer", "Intern", "Employee"]
    },
]
// create a function to write the HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// create intialize function
function init() {
    inquirer.prompt(questions)
        .then((answer) => {
            console.log(answer)
            writeToFile('./dist/index.html', generateHTML(answer))
        })
}

init();