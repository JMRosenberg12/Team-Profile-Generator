const Employee = require("./Employee.js")
class Intern extends Employee{
    constructor(name, id, email, school) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!id) {
        throw new Error("Please enter your id.");
      }
      if (!email) {
        throw new Error("Please enter your email.");
      }
      if (!school) {
          throw new Error ("Please enter which school you go to.")
      }
    
      super(name, id, email)
      this.school = school
    }

    getschool(){
        return this.school
    }
    getRole() {
        return this.Intern
    }
}

module.exports = Intern