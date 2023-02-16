const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Intern', () => {
  test('should throw error if render() is called', () => {
    
    
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
  
    

  });
});