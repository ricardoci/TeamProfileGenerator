const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');
const Employee = require('../lib/Employee');

class CLI {
  constructor() {
    this.tasks = [];
  }
  
  run() {
    return inquirer
      .prompt([
        {
          type: "checkbox",
          name: "Position",
          message: "Please select job occupancy",
          choices: ["engineer", "manager", "intern","Employee" ,"none"],
        },
      ])
      .then(({  Position, }) => {
        const selectedPosition = Position.join(", ");
        this.Position = `${selectedPosition}`
        return this.Employee();
      })
     
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

  Employee() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is your id?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email?',
        },
        {
          type: 'confirm',
          name: 'confirmAddTask',
          message: 'Would you like to add another member?',
        },
      ])
      .then(({ name, id, email, confirmAddTask }) => {
        const employee = new Employee(name, id, email, confirmAddTask);
        this.tasks.push({ name, id, email }); // push an object containing name, id, and email
        if (confirmAddTask) {
          return this.Employee();
        }
      })
      .then(() => {
        return writeFile(
          join(__dirname, '..', 'teamProfiles.html'),
          createDocument(this.Position, this.tasks)
        );
      })
      .then(() => console.log('Created teamProfiles.html'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}  

module.exports = CLI;
