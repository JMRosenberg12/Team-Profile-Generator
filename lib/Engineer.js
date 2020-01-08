const Employee = require("./Employee.js")

class Engineer extends Employee{
    constructor(name, email, color, github) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!id) {
        throw new Error("Please enter your ID.");
      }
      if (!email) {
        throw new Error("Please enter your email.");
      }
      if (!github) {
          throw new error ("Please enter your github.")
      }

      super(name, id, email)
      this.github = github
    }

    printStats() {
        console.log(`Stats for ${this.name} are as following:`);
        console.log(`Each attack will do ${this.id} damage.`);
        console.log(`${this.name} has right ${this.Email} address`);
        console.log("------------");
    }
    getGithub(){
        return this.github
        }
        getRole() {
            return this.Engineer
        }
    
}
module.exports = Engineer