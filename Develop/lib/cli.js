const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');
const Employee = require('../lib/Employee');
class CLI {
  constructor() {
    this.title = '';
   
    this.tasks =[];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Please enter your name',
        },
        {
          type: "checkbox",
          name: "Occupancy",
          message: "Please select job occupancy",
          choices: ["engineer", "manager", "intern","Employee" ,"none"],
        },
      ])
      .then(({ name, Occupancy}) => {
        const selectedOccupancy = Occupancy.join(", ");
        this.title = `${name}`;
        
        
        this.Occupancy = `${selectedOccupancy}`
        return this.Employee();
      })
   
      
   
      .then(() => {
        
        
        return writeFile(
          join(__dirname, '..', 'teamProfiles.html'),
          createDocument(this.title, this.Occupancy, )
        );
      })
      .then(() => console.log('Created teamProfiles.html'))
      
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
      .then(({Occupancy, name, id, email, confirmAddTask }) => {
        this.tasks.push({ Occupancy ,name, id ,email});
        if (confirmAddTask) {
          return this.Employee();
        }
      });
  }
}


  module.exports = CLI;