const inquirer = require('./cli');
const document = require('./document');


class Employee{
    constructor(name, id , email){
        this.name = name,
        this.id = id,
        this.email = email

    }
}
 function getName(name) {
    if (name) {
      return `<p>${name}</p>`;
    }
    return "";
  }
  
  function getId(id) {
    
    if (id) {
      return `<p>${id}</p>`;
    }
    return ``;
  }
  function getEmail(email) {
    if (email) {
      return `<p>${email}</p>`;
    }
    return "";
  }
  function getRole() {
    
    return Employee;
  }

module.exports = Employee;