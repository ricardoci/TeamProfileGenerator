const inquirer = require('./cli');
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(){
        super()
        this.officNumber = officNumber;

    }
}
function getRole() {
    
    return Manager;
  }

module.exports = Manager;