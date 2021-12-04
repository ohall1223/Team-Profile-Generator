// use the employee constructor
const Employee = require('../lib/Employee')

//create an employee object
describe('Employee Class', () => {
    it('Should create an Employee object with a name, id and email', () => {
        const employee = new Employee("Olivia", 12, "ohall1223@gmail.com")

        expect(employee.name).toEqual("Olivia")
        expect(employee.id).toEqual(12)
        expect(employee.id).toEqual("ohall1223@gmail.com")
    })
})
