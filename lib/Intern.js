class Intern {
    constructor(name, color, Email, college) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!color) {
        throw new Error("Please enter your favorite color.");
      }
      if (!Email) {
        throw new Error("Please enter your email.");
      }
      if (!college) {
          throw new error ("Please enter which college you go to.")
      }
      this.name = name;
      this.color = color;
      this.email = email;
      this.college = college
    }

    printStats() {
        console.log(`Stats for ${this.name} are as following:`);
        console.log(`Each attack will do ${this.color} damage.`);
        console.log(`${this.name} has right ${this.Email} address`);
        console.log("------------");
    }
    getschool(){
        return this.school
    }
    getRole() {
        return this.Intern
    }
}