const Engineer = require('../lib/Engineer')
describe("Engineer", () => {
    test ("Test for name", () => {
        let example1 = new Engineer("Jack", 4, "jack@Jack.com", "gittyUp")
        expect(example1.getName()).toBe("Jack")
    })
    test ("Test for Id", () => {
        let example1 = new Engineer("Jack", 4, "jack@Jack.com", "gittyUp")
        expect(example1.getId()).toBe(4)
    })
    test ("Test for Email", () => {
        let example1 = new Engineer("Jack", 4, "jack@Jack.com", "gittyUp")
        expect(example1.getEmail()).toBe("jack@Jack.com")
    })
    test ("Test for github", () => {
        let example1 = new Engineer("Jack", 4, "jack@Jack.com", "gittyUp")
        expect(example1.getGitHub()).toBe("gittyUp")
    })
    test ("Test for getRole", () => {
        let example1 = new Engineer("Jack", 4, "jack@Jack.com", "gittyUp")
        expect(example1.getRole()).toBe("Engineer")
    })
})