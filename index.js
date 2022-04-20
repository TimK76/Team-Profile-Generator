// Include packages
const fs = require('fs');
const inquirer = require('inquirer');
const { generateHTML } = require('./src/generateHTML');
const path = require('path');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const teamList = [];


// function addMembers() {
//     // what object properties should be included here?
// }


// _______________-------create questions arrays--------___________________________

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
            message: "What is the new Team Engineer's GitHub Profile name?"
        },
    ]
// Intern Questions array
const internQuestions =
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
            name: "school",
            message: "What school is the new Team Intern from?"
        },
    ]

// inquire to finish building team
const finishTeambuild = [
    {
        type: "list",
        name: "add",
        message: "Would you like to add an Engineer or Intern?",
        choices: ["Engineer", "Intern", "done"]
    }
]


// create a function to write the HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// // create a function to end the questions menu and move to writing the html file
// function questionsEnd() {
        
// }
function menuQuestions() {
    inquirer.prompt(finishTeambuild)
        .then(answer => {
            console.log(answer);
            if (answer.add === "Engineer") {
                inquirer.prompt(engineerQuestions)
                    .then(answer => {
                    var newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
                    teamList.push(newEngineer)
                    console.log(teamList)
                    menuQuestions()
                    })
            } else if (answer.add === "Intern") {
                inquirer.prompt(internQuestions)
                    .then(answer => {
                    var newIntern = new Intern(answer.name, answer.id, answer.email, answer.school)
                    teamList.push(newIntern)
                    console.log(teamList)
                    menuQuestions()
                    })
            } else if (answer.add === "done") {
                writeToFile('./dist/index.html', generateHTML(teamList));
                console.log("new index.html created in dist directory.")
            };
        })
    }
    // create intialize function
    function init() {
        inquirer.prompt(managerQuestions)
            .then((answer) => {
                var managerOne = new Manager (answer.name, answer.id, answer.email, answer.officeNumber)
                teamList.push(managerOne);
                console.log(teamList);
                menuQuestions();
            })
        // writeToFile('./dist/index.html', generateHTML(answer))
    }
    init();
    