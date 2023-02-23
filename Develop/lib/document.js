const Employee = require("./Employee");
const engine = require("./Engineer");
const Manager = require('../lib/Manager');
const inquirer = require('./cli');


function createDocument( Position, tasks, engine, manager ) {


  const Manager = manager
  .map((manager) => {
    return `
      <div class="card">
      <h3>Team Manager</h3>
        <h3>${manager.name}</h3>
        <p>ID: ${manager.id}</p>
        <p>Email: ${manager.email}</p>
        <p>Email: ${manager.officeNumber}</p>
      </div>
    `;
  })
  .join('');


  const employeeList = tasks
    .map((task) => {
      return `
        <div class="card">
          <h3>${task.name}</h3>
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
          <h3>${engine.name}</h3>
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
     
      <p>${Position}</p>
      ${Manager}
      ${employeeList}</p>
      ${engineers}</p>
      
      

    
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
