const inquirer = require('./cli');
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(github){
        super()
        this.github = github;



    }
}
function getGithub(){
    if (github) {
        return `<p>${github}</p>`;
      }
      return "";
}


function getRole() {
    
    return Engineer;
  }

module.exports = Engineer;