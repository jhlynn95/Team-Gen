class Employee {
    constructor(name,role,id,email= "Employee")
    {
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;
        
    }
    getName() {
        return this.name;
    }
    getRole() {
        return "Employee";
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    
}

module.exports = Employee;