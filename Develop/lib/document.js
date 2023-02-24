const Employee = require("./Employee");
const engine = require("./Engineer");
const Intern = require("./Intern");
const Manager = require('../lib/Manager');
const inquirer = require('./cli');


function createDocument(Position, tasks, engine, manager, inter) {
  const internsHtml = inter
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

  const managersHtml = manager
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

  const employeeListHtml = tasks
    .map((task) => {
      return `
        <div class="card">
          <h3>${Position}</h3>
          <p>${task.name}</p>
          <p>ID: ${task.id}</p>
          <p>Email: ${task.email}</p>
        </div>
      `;
    })
    .join('');

  const engineersHtml = engine
    .map((engineer) => {
      return `
        <div class="card">
          <h3>${Position}</h3>
          <p>${engineer.name}</p>
          <p>ID: ${engineer.id}</p>
          <p>Email: ${engineer.email}</p>
          <p>github: ${engineer.github}</p>
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
        <link rel="stylesheet" href="../Develop/dist/style.css" />
      </head>
      <body>
        <div class="card">
          ${managersHtml}
          ${employeeListHtml}
          ${engineersHtml}
          ${internsHtml}
        </div>
      </body>
    </html>
  `;
}




module.exports = { createDocument };