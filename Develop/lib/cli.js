const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

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
      ])
  
      .then(() => {
        // sort by priority so that priority tasks come before non-priority tasks
        
        return writeFile(
          join(__dirname, '..', 'teamProfiles.html'),
          createDocument(this.title)
        );
      })
      .then(() => console.log('Created tasks.html'))
      
    }
}


  module.exports = CLI;