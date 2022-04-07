const Manager = require('../lib/Manager')
describe("Manager", () => {
    test ("Test for name", () => {
        let example1 = new Manager("Jack", 4, "jack@Jack.com", 8675309)
        expect(example1.getName()).toBe("Jack")
    })
    test ("Test for Id", () => {
        let example1 = new Manager("Jack", 4, "jack@Jack.com", 8675309)
        expect(example1.getId()).toBe(4)
    })
    test ("Test for Email", () => {
        let example1 = new Manager("Jack", 4, "jack@Jack.com", 8675309)
        expect(example1.getEmail()).toBe("jack@Jack.com")
    })
    test ("Test for officeNumber", () => {
        let example1 = new Manager("Jack", 4, "jack@Jack.com", 8675309)
        expect(example1.getOfficeNumber()).toBe(8675309)
    })
    test ("Test for getRole", () => {
        let example1 = new Manager("Jack", 4, "jack@Jack.com", 8675309)
        expect(example1.getRole()).toBe("Manager")
    })
})