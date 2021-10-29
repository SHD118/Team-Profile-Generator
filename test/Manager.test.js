const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")


describe("Init Employee...", () => {
    // it("It should return name properties from Employee", () => {
    //     const test = new Employee("Hiro")
    //     expect(test.name).toEqual("Hiro")
    // })
    it("It should return officeNumber properties from Employee", () => {
        const test = new Employee("Hiro", 300)
        expect(test.officeNumber).toEqual(300)
    })

})