const Employee = require("./Employee.js")
class Engineer extends Employee{
    constructor(name, email, color, github) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!Email) {
        throw new Error("Please enter your email.");
      }
      if (!color) {
        throw new Error("Please enter your favorite color.");
      }
      if (!college) {
          throw new error ("Please enter your github.")
      }

      super(`name: Jacob`,`color: green`, `job: Engineer`)
      this.name = name;
      this.color = color;
      this.email = email;
      this.github = github
    }

    printStats() {
        console.log(`Stats for ${this.name} are as following:`);
        console.log(`Each attack will do ${this.color} damage.`);
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