class Intern {
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
}