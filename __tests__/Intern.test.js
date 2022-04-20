const Intern = require("../lib/Intern");
describe("Intern", () => {
  test("Test for name", () => {
    let example1 = new Intern("Jack", 4, "jack@Jack.com", "Perdue");
    expect(example1.getName()).toBe("Jack");
  });
  test("Test for Id", () => {
    let example1 = new Intern("Jack", 4, "jack@Jack.com", "Perdue");
    expect(example1.getId()).toBe(4);
  });
  test("Test for Email", () => {
    let example1 = new Intern("Jack", 4, "jack@Jack.com", "Perdue");
    expect(example1.getEmail()).toBe("jack@Jack.com");
  });
  test("Test for school", () => {
    let example1 = new Intern("Jack", 4, "jack@Jack.com", "Perdue");
    expect(example1.getSchool()).toBe("Perdue");
  });
  test("Test for getRole", () => {
    let example1 = new Intern("Jack", 4, "jack@Jack.com", "Perdue");
    expect(example1.getRole()).toBe("Intern");
  });
});
