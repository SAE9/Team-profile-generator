// TODO: Write code to define and export the Employee class
//Added class employee constructor function. Employee class is the parent class.
 class Employee {
    constructor (name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return this.name;
    }

    getID () {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole () {
        return 'Employee';
    
    }




}


module.exports = Employee;
