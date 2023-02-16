const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class CLI {
  constructor() {
    this.title = '';
    this.Employe=[];

 
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Please enter your name',
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