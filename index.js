//this part should contain the bare minimum code.
//The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.

// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'

// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'

const CLI = require('./Develop/lib/cli');

const cli = new CLI();

cli.manage();

