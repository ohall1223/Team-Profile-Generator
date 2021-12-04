// use the intern constructor
const Intern = require('../lib/Intern')

// create an intern object 
describe('Intern Class', () => {
    it('Should create an Intern object with a name, id, email, and school', () => {
        const intern = new Intern("Olivia I", 90, "ohall1223@gmail.com", "University of Denver")

        expect(intern.name).toEqual("Olivia I")
        expect(intern.id).toEqual(90)
        expect(intern.email).toEqual("ohall1223@gmail.com")
        expect(intern.school).toEqual("University of Denver")
    })
})