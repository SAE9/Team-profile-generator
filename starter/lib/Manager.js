// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ('./Employee');
//links manager file to employee file

//subclass manager is created to inherit employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id ,email);
        this.officeNumber = officeNumber;

        }

        getOfficeNumber () {
            return this.officeNumber;
        }

        getRole () {
            return Manager;
        }
    
}

module.exports = Manager;
