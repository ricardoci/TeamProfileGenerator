const Employee = require('../lib/Employee');

describe('Intern', () => {
  test('should throw error if render() is called', () => {
    
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
        return "";
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
   
  
    

  });
});