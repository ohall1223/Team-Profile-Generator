const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // gets the passed down methods from Employee
        super(name, id, email);
        this.github=github
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.guthub;
    }
}

module.exports = Engineer;