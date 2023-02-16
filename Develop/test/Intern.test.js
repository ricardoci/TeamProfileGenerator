const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

describe('Intern', () => {
  test('should throw error if render() is called', () => {
    
    
    class Intern extends Employee{
        constructor(){
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
  

  });
});