const Employee = require("./Employee.js")


class Manager extends Employee{
    constructor(name, id, email, officenumber) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!id) {
        throw new Error("Please enter your ID.");
      }
      if (!email) {
        throw new Error("Please enter your email.");
      }
      if (!officenumber) {
          throw new Error ("Please enter your office number.")
      }
      super(name, id, email)
      this.officenumber = officenumber
    }



getOfficenumber(){
    return this.officenumber 
 }
 
 getrole() {
     return this.Manager
 }
}
module.exports = Manager