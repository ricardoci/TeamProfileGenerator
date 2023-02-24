const Employee = require("./Employee");
const engine = require("./Engineer");
const Intern = require("./Intern");
const Manager = require('../lib/Manager');
const inquirer = require('./cli');


function createDocument( Position, tasks, engine, manager, inter ) {



  const Intern = inter
  .map((inter) => {
    return `
      <div class="card">
      <h3>${Position}</h3>
        <p>${inter.name}</p>
        <p>ID: ${inter.id}</p>
        <p>Email: ${inter.email}</p>
        <p>School Name: ${inter.school}</p>
      </div>
    `;
  })
  .join('');

  const Manager = manager
  .map((manager) => {
    return `
      <div class="card">
      <h3>Team Manager</h3>
        <p>${manager.name}</p>
        <p>ID: ${manager.id}</p>
        <p>Email: ${manager.email}</p>
        <p>Office Number: ${manager.officeNumber}</p>
      </div>
    `;
  })
  .join('');


  const employeeList = tasks
    .map((task) => {
      return `
        <div class="card">
        <h3>${Position}</h3>
        <p>${task.name}</p>
          <p>${task.name}</p>
          <p>ID: ${task.id}</p>
          <p>Email: ${task.email}</p>
        </div>
      `;
    })
    .join('');


    const engineers = engine
    .map((engine) => {
      return `
        <div class="card">
        <h3>${Position}</h3>
          <p>${engine.name}</p>
          <p>ID: ${engine.id}</p>
          <p>Email: ${engine.email}</p>
          <p>github: ${engine.github}</p>
        </div>
      `;
    })
    .join('');

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
     
      
      ${Manager}
      ${employeeList}
      ${engineers}
      ${Intern}
      

    
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
