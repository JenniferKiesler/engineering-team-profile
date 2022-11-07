const Manager = require("../lib/Manager");

describe("Manager", () => {
    it('Has the correct name of the manager', () => {
        const name = "Jim";
        const id = 1;
        const email = 'jim@gmail.com'
        const officeNumber = 1

        const manager = new Manager(name, id, email, officeNumber)
        const managerName = manager.getName();

        expect(managerName).toBe(name)
    })
    it('Has the correct ID for the manager', () => {
        const name = "Jim";
        const id = 1;
        const email = 'jim@gmail.com'
        const officeNumber = 1

        const manager = new Manager(name, id, email, officeNumber)
        const managerID = manager.getId();

        expect(managerID).toBe(id)
    })
    it('Has the correct email for the manager', () => {
        const name = "Jim";
        const id = 1;
        const email = 'jim@gmail.com'
        const officeNumber = 1

        const manager = new Manager(name, id, email, officeNumber)
        const managerEmail = manager.getEmail();

        expect(managerEmail).toBe(email)
    })
    it('Has the correct office number for the manager', () => {
        const name = "Jim";
        const id = 1;
        const email = 'jim@gmail.com'
        const officeNumber = 1

        const manager = new Manager(name, id, email, officeNumber)
        const managerOfficeNum = manager.getOfficeNumber();

        expect(managerOfficeNum).toBe(officeNumber)
    })
    it('Has the correct role', () => {
        const role = "Manager"

        const name = "Jim";
        const id = 1;
        const email = 'jim@gmail.com'
        const officeNumber = 1

        const manager = new Manager(name, id, email, officeNumber)
        const managerRole = manager.getRole();

        expect(managerRole).toBe(role)
    })
})