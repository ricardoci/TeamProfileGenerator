const Employee = require("./Employee");
const inquirer = require('./cli');


function createDocument( Position, tasks ) {
 

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
      <p>${tasks.getName}</p>
      

    
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
