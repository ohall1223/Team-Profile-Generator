// use the engineer constructor
const Engineer = require('../lib/Engineer')

// create an engiener object
describe('Engineed Class', () => {
    it('Should create an Engineer object with a name, id, email, and github link', () => {
        const engineer = new Engineer("Olivia E", 78, "ohall1223@gmail.com", 90, "ohall1223")

        expect(engineer.name).toEqual("Olivia E")
        expect(engineer.id).toEqual(78)
        expect(engineer.email).toEqual('ohall1223@gmail.com')
        expect(engineer.github).toEqual('ohall1223')
    })
})