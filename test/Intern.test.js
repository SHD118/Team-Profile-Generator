const Employee = require("../lib/Employee")
const Intern = require("../lib/Intern")


describe("Init Intern...", () => {
    // it("It should return name properties from Employee", () => {
    //     const test = new Employee("Hiro")
    //     expect(test.name).toEqual("Hiro")
    // })
    it("It should return officeNumber properties from Employee", () => {
        const test = new Employee("Hiro", "NJIT")
        expect(test.school).toEqual("NJIT")
    })

})