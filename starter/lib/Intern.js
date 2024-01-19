// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
// Links employee file to Intern file

//Create subclass Intern to inherit from Employee class
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name,id,email);
        this.school = school;

    }

    getSchool () {
        return this.school;
    }


    getRole () {
        return 'Intern';
    }



}


module.exports = Intern;