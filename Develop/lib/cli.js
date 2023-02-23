const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');

class CLI {
  constructor() {
    this.tasks = [];
    this.engine = [];
    this.manager = [];
    this.Position = '';
  
  }
    
  manage() {
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
          type: 'input',
          name: 'officeNumber',
          message: 'What is your office Number?',
        },
        {
          type: 'confirm',
          name: 'confirmAddTask',
          message: 'Would you like to add another member?',
        },
      ])
      
      .then(({ name, id, email, officeNumber, confirmAddTask }) => {
        const manage = new Manager(name, id, email, officeNumber, confirmAddTask);
        this.manager.push({ name, id, email, officeNumber }); // push an object containing name, id, and email
        if (confirmAddTask) {
          return this.choice();
        }
        else{ return writeFile(
          
          join(__dirname, '..', 'teamProfiles.html'),
          createDocument(this.Position, this.tasks, this.engine, this.manager)
        
        )
        }
      })
     
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
      
  }




  Engineer() {
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
          type: 'input',
          name: 'github',
          message: 'What is your github?',
        },
        {
          type: 'confirm',
          name: 'confirmAddTask',
          message: 'Would you like to add another member?',
        },
      ])
      
       


      .then(({ name, id, email,github, confirmAddTask }) => {
        
        const engineer = new Engineer(name, id, email, github, confirmAddTask);
        this.engine.push({ name, id, email, github }); // push an object containing name, id, and email
        if (confirmAddTask) {
          return this.choice();
        }
        else{ return writeFile(
          
          join(__dirname, '..', 'teamProfiles.html'),
          createDocument(this.Position, this.tasks, this.engine, this.manager)
        
        )
        }
      })
     
      .then(() => console.log('Created teamProfiles.html'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });

    }

    choice() {
      return inquirer
        .prompt([
          {
            type: "checkbox",
            name: "Position",
            message: "Would you like to add an intern or engineer?",
            choices: ["engineer", "intern" ],
          }
        ])
        .then(({ Position }) => {
          const selectedPosition = Position.join(', ');
          this.Position = `${selectedPosition}`;
          
        })
       
     

        .then(() => {
         
          if (this.Position.includes("engineer")) {
            return this.Engineer();
          } else if (answers.Position.includes("intern")) {
            return this.intern();
          } else {
            return null;
          }
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
       
         

        
        const employee = new Employee( name, id, email, confirmAddTask);
        this.tasks.push({ name, id, email }); // push an object containing name, id, and email
        if (confirmAddTask) {
          return this.run();
        }
        else  return writeFile(
          join(__dirname, '..', 'teamProfiles.html'),
          createDocument(this.Position, this.tasks, this.engine, this.manager)
        )
     
      })
      
      .then(() => console.log('Created teamProfiles.html'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}  

module.exports = CLI;
