const inquirer = require('./cli');
const Employee = require('./Employee');

class Intern extends Employee{
    constructor(school){
        super()
        this.school = school;

    }
}
function getSchool(){
    if (school) {
        return `<p>${school}</p>`;
      }
      return "";
}

function getRole() {
    
    return Intern;
  }
  module.exports = Intern;