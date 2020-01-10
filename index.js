const Inquirer = require("inquirer");
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const employees = []
// store list employees
// const Employee = require('./lib/Employee.test.js');
// const Intern = require('./lib/test/Intern.test.js');
// const Manager = require('./lib/test/Manager.test.js');
// const Engineer = require('./lib/test/Engineer.test.js');

function getManager() {
    return Inquirer.prompt([
        {
            message: "What is your name?",
            type: "input",
            name: "name",
        }, {
            message: "What is your Id",
            type: "input",
            name: "id",
        }, {
            message: "What is your email?",
            type: "input",
            name: "email",
        }, {
            message: "What is your office number?",
            type: "input",
            name: "officeNumber",
        }
    ])
}

function getEngineer() {
    return Inquirer.prompt([
        {
            message: "What is your name?",
            type: "input",
            name: "name",
        }, {
            message: "What is your id?",
            type: "input",
            name: "id",
        }, {
            message: "What is your email?",
            type: "input",
            name: "email",
        }, {
            message: "What is your github profile?",
            type: "input",
            name: "github",
        }
    ])
}

function getIntern() {
    return Inquirer.prompt([
        {
            message: "What is your name?",
            type: "input",
            name: "name",
        }, {
            message: "What is your id",
            type: "input",
            name: "id",
        }, {
            message: "What is your email?",
            type: "input",
            name: "email",
        }, {
            message: "What school did you go to?",
            type: "input",
            name: "school",
        }
    ])
}

function getEmployee() {
    return Inquirer.prompt([
        {
            message: "What is you name?",
            type: "input",
            name: "name",
        }, {
            message: "What is your ID",
            type: "input",
            name: "ID",
        }, {
            message: "What is your email?",
            type: "input",
            name:"email"
        },
    ])
}

function anotherEmployee() {
    return Inquirer.prompt([

        {
            message: "Would you like to add another employee?",
            type: "confirm",
            name: "anotherEmployee",
        }
    ])
}

function typeOfEmployee() {
    return Inquirer.prompt([

        {
            message: "Are they an Engineer or an Intern?",
            type: "list",
            name: "typeOfEmployee",
            choices: ['Engineer', 'Intern']
        }
    ])
}

function nextEmployee() {
    anotherEmployee().then(function (value) {
        if(value.anotherEmployee){
            typeOfEmployee().then(function (value) {
                if(value.typeOfEmployee === 'Engineer') {
                    getEngineer().then(function (value) {
                        let e = new Engineer(value.name, value.id, value.email, value.github);
                        employees.push(e)
                        nextEmployee();
                    })
                } else {
                    getIntern().then(function (value) {
                        let e = new Intern(value.name, value.id, value.email, value.school);
                        employees.push(e)
                        // console.log(intern);
                        nextEmployee();
                    })
                }
                
            })
        } else {
            // this code is wrong when you don't need employee
            console.log(employees)
        }
    }) 
}


getManager().then(function (value) {
    let e = new Manager(value.name, value.id, value.email, value.officeNumber);
    employees.push(e)
    // console.log(e);
    nextEmployee();
})

function generateHTML(jobTitle){
    // let newCard = document.createElement('div');
    // let add = document.getElementById('add');
    // add.appendChild(newCard);
}
