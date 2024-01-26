// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
// Links employee file to Intern file

//Create subclass Intern to inherit from Employee class
class Intern extends Employee {
     // Constructor function to initialize the employee's name, id, and email
    constructor (name, id, email, school) {
        super (name,id,email);
        this.school = school;

    }
// call back function to retrive school name
    getSchool () {
        return this.school;
    }

// call back function to retrive role
    getRole () {
        return 'Intern';
    }



}

// Export the Employee class so that it can be used in other files
module.exports = Intern;