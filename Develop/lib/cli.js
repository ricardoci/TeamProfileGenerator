const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');
const { Employee } = require('./Employee');
class CLI {
  constructor() {
    this.title = '';
   
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
          name: "job",
          message: "Please select job occupancy",
          choices: ["engineer", "manager", "intern","employee" ,"none"],
        },
      ])
      .then(({ name }) => {
        this.title = `${name}`;
        return `<header class="header"><p>${this.title}</p></header>`;
      })
   
      .then(() => {
        // sort by priority so that priority tasks come before non-priority tasks
        
        return writeFile(
          join(__dirname, '..', 'teamProfiles.html'),
          createDocument(this.title)
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