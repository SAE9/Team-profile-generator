// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
// Links employee file to engineer file

//Create subclass Engineer to inherit from Employee class
class Engineer extends Employee {
    // Constructor function to initialize the employee's name, id, and email
    constructor (name, id, email, github) {
        super (name,id,email);
        this.github = github;

    }
// call back function to retrive github username
    getGithub () {
        return this.github;
    }

// call back function to retrive role
    getRole () {
        return 'Engineer';
    }



}

// Export the Employee class so that it can be used in other files
module.exports = Engineer;