const Employee = require("../lib/Employee");

describe("Employee", () => {
    it('Should return name of employee', () => {
        const name = "Jim";

        const result = new Employee().getName(name);

        expect(result).toEqual(name)
    })
})