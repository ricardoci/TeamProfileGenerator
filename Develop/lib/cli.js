const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

class CLI {
  constructor() {
    this.tasks = [];
    this.engine = [];
    this.manager = [];
    this.inter = [];
    this.Position = [];
  
  }
    
  manage() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your Managers name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is your Managers id?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your Managers email?',
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is your office Managers Number?',
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
          createDocument(this.Position, this.tasks, this.engine, this.manager, this.inter)
        
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
          message: 'What is your Engineers name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is your Engineers id?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your Engineers email?',
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is your Engineers github?',
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
          createDocument(this.Position, this.tasks, this.engine, this.manager, this.inter)
        
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
          const selectedPosition = Position.join(", ");
        this.Position = `${selectedPosition}`


          if (Position.includes("engineer")) {
            return this.Engineer();
          } else if (Position.includes("intern")) {
            return this.Intern();
          } else {
            return null;
          }
        });
    }
    

      Intern() {
        return inquirer
          .prompt([
            {
              type: 'input',
              name: 'name',
              message: 'What is your Interns name?',
            },
            {
              type: 'input',
              name: 'id',
              message: 'What is your Inters id?',
            },
            {
              type: 'input',
              name: 'email',
              message: 'What is your Interns email?',
            },
            {
              type: 'input',
              name: 'school',
              message: 'What is your Interns School Name?',
            },
            {
              type: 'confirm',
              name: 'confirmAddTask',
              message: 'Would you like to add another member?',
            },
          ])
          .then(({ name, id, email, school, confirmAddTask }) => {
      
            const Inter = new Intern( name, id, email, school, confirmAddTask);
            this.inter.push({ name, id, email, school }); // push an object containing name, id, and email
            
            if (confirmAddTask) {
              return this.choice();
            } else {
              return Promise.all([
                writeFile(
                  join(__dirname, '..', 'teamProfiles.html'),
                  createDocument(this.Position, this.tasks, this.engine, this.manager, this.inter)
                )
              ]).then(() => console.log('Created teamProfiles.html'));
            }
          })
          .then(() => console.log('Created teamProfiles.html'))
          .catch((err) => {
            console.log(err);
            console.log('Oops. Something went wrong.');
          });
  }
}  

module.exports = CLI;
