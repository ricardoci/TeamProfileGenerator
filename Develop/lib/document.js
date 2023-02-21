const Employee = require("./Employee");
const inquirer = require('./cli');


function createDocument(title, Position, id) {
  

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
      <p>${title}</p>
      <p>${Position}</p>
      <p>${id}</p>
      

    
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
