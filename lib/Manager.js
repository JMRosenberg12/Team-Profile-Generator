const Employee = require("./Employee.js")


class Manager extends Employee{
    constructor(name, ID, Email, officenumber) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!ID) {
        throw new Error("Please enter your ID.");
      }
      if (!Email) {
        throw new Error("Please enter your email.");
      }
      if (!officenumber) {
          throw new error ("Please enter your office number.")
      }
      super(`name: Jacob`,`color: green`, `job: Manager`)
      this.name = name;
      this.ID = ID;
      this.Email = Email;
      this.officenumber = officenumber
    }

    printStats() {
        console.log(`Stats for ${this.name} are as following:`);
        console.log(`Each attack will do ${this.color} damage.`);
        console.log(`${this.name} has right ${this.Email} address`);
        console.log("------------");
    }


getOfficenumber(){
    return this.officenumber 
 }
 
 getrole() {
     return this.Manager
 }
}
module.exports = Manager