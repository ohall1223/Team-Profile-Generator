// use the manager consrtuctor 
const Manager = require('../lib/Manager')

// create a manager constructor 
describe('Manager Class', () => {
    it('Should create a Manager object with a name, id, email, and office number', () => {
        const manager = new Manager("Olivia M", 34, "ohall1223@gmail.com", 56)

        expect(manager.name).toEqual("Olivia")
        expect(manager.id).toEqual(12)
        expect(manager.email).toEqual("ohall1223@gmail.com")
        expect(manager.officeNumber).toEqual(56)
    })
})