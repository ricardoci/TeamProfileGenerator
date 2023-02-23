const inquirer = require('./cli');
const Employee = require('./Employee');



class Manager extends Employee{
    constructor(officeNumber){
        super()
        this.officeNumber = officeNumber;

    }
}
function getRole() {
    
        if (officeNumber) {
            return `<p>${officeNumber}</p>`;
          }
          
    
    return Manager;
  }

module.exports = Manager;