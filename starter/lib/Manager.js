// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ('./Employee');
//links manager file to employee file

//subclass manager is created to inherit employee class
class Manager extends Employee {
    // Constructor function to initialize the employee's name, id, and email
    constructor(name, id, email, officeNumber) {
        super (name, id ,email);
        this.officeNumber = officeNumber;

        }
// call back function to retrieve office number
        getOfficeNumber () {
            return this.officeNumber;
        }
// call back function to retrieve role
        getRole () {
            return 'Manager';
        }
    
}
// Export the Employee class so that it can be used in other files
module.exports = Manager;
