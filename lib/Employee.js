class Employee {
    constructor(name, id, email) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!id) {
        throw new Error("Please add your ID.");
      }
      if (!email) {
        throw new Error("Please enter your Email.");
      }
      this.name = name;
      this.id = id;
      this.email = email;
    }

    printStats() {
        console.log(`Stats for ${this.name} are as following:`);
        console.log(`Each attack will do ${this.color} damage.`);
        console.log(`${this.name} has ${this.job}!`);
        console.log("------------");
    }
   getName() {
        return this.name

    }

    getID() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.employer
    }


}
module.exports = Employee


    