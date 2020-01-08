class Manager {
    constructor(name, color, Email, officenumber) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!color) {
        throw new Error("Please enter your favorite color.");
      }
      if (!Email) {
        throw new Error("Please enter your email.");
      }
      if (!officenumber) {
          throw new error ("Please enter your office number.")
      }
      this.name = name;
      this.color = color;
      this.job = job;
    }

    printStats() {
        console.log(`Stats for ${this.name} are as following:`);
        console.log(`Each attack will do ${this.color} damage.`);
        console.log(`${this.name} has right ${this.Email} address`);
        console.log("------------");
    }
}