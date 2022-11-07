const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('./src/generateHTML.js')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const engineers = []
const interns = []

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the team manager's employee ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address?"
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "What is the team manager's office number?"
    }
])
.then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    // console.log(manager)
    const managerHTML = generateHTML.generateManagerCard(manager)
    console.log(managerHTML)
    buildTeam()
})
.catch(err => console.log(err))


function buildTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'buildTeam',
            message: "Would you like to add an engineer or an intern or to finish building the team?",
            choices: ['engineer', 'intern', 'finish building team']
        }
    ])
    .then((answer) => {
        console.log(answer)
        if (answer.buildTeam === 'engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the engineer's name?"
                },
                {
                    type: 'number',
                    name: 'id',
                    message: "What is the engineer's employee ID?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the engineer's email address?"
                },
                {
                    type: 'input',
                    name: 'username',
                    message: "What is the engineer's GitHub username?"
                },
            ])
            .then((answers) => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.username)
                console.log(engineer)
                engineers.push(engineer)
                console.log(engineers)
                // console.log(answers)
                // teamMembers.push(answers)
                // console.log(teamMembers)
            })
            .then(() => {
                buildTeam()
            })
            .catch(err => console.log(err))
        } else if (answer.buildTeam === 'intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the intern's name?"
                },
                {
                    type: 'number',
                    name: 'id',
                    message: "What is the intern's employee ID?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the intern's email address?"
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is the intern's school?"
                },
            ])
            .then((answers) => {
                console.log(answers)
                teamMembers.push(answers)
                console.log(teamMembers)
            })
            .then(() => {
                buildTeam()
            })
            .catch(err => console.log(err))
        } else if (answer.buildTeam === 'finish building team') {
            // console.log(teamMembers)
            const engineersHTML = generateHTML.generateEngineerCard(engineers)
            console.log(engineersHTML)
        }
    })
    .catch(err => console.log(err))
}