// TODO: Write code to define and export the Employee class
//Added class employee constructor function. Employee class is the parent class.
 class Employee {
    // Constructor function to initialize the employee's name, id, and email
    constructor (name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
// call back function to retrive name
    getName() {
        return this.name;
    }
// call back function to  retrieve id
    getId () {
        return this.id;
    }
// call back function to retrieve email
    getEmail() {
        return this.email;
    }
// call back function to retrieve employee role
    getRole () {
        return 'Employee';
    
    }




}

// Export the Employee class so that it can be used in other files
module.exports = Employee;
