const Employee = require("../lib/Employee");
describe("Employee", () => {
  test("Test for name", () => {
    let example1 = new Employee("Jack", 4, "jack@Jack.com");
    expect(example1.getName()).toBe("Jack");
  });
  test("Test for Id", () => {
    let example1 = new Employee("Jack", 4, "jack@Jack.com");
    expect(example1.getId()).toBe(4);
  });
  test("Test for Email", () => {
    let example1 = new Employee("Jack", 4, "jack@Jack.com");
    expect(example1.getEmail()).toBe("jack@Jack.com");
  });
  test("Test for getRole", () => {
    let example1 = new Employee("Jack", 4, "jack@Jack.com");
    expect(example1.getRole()).toBe("Employee");
  });
});
