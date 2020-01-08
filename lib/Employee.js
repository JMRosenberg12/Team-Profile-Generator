class Employee {
    constructor(name, color, job) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!color) {
        throw new Error("You are missing the strength.");
      }
      if (!job) {
        throw new Error("You are missing the hitPoints.");
      }
      this.name = name;
      this.color = color;
      this.job = job;
    }

    printStats() {
        console.log(`Stats for ${this.name} are as following:`);
        console.log(`Each attack will do ${this.color} damage.`);
        console.log(`${this.name} has ${this.job} hit points remaining!`);
        console.log("------------");
    }
    getName() {
        return this.name

    }
}

    