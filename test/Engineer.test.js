const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")


describe("Init Engineer...", () => {
    // it("It should return name properties from Employee", () => {
    //     const test = new Employee("Hiro")
    //     expect(test.name).toEqual("Hiro")
    // })
    it("It should return id properties from Employee", () => {
        const test = new Employee("Hiro", "github")
        expect(test.officeNumber).toEqual( "github")
    })

})