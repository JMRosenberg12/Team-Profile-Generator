class Employee {
    constructor(name, color, job) {
      if (!name) {
        throw new Error("You are missing the name.");
      }
      if (!color) {
        throw new Error("Please add your favorite color.");
      }
      if (!job) {
        throw new Error("Please add your favorite job.");
      }
      this.name = name;
      this.color = color;
      this.job = job;
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
class Manager { 
    getOfficenumber(){
       return this.officenumber 
    }
    
    getrole() {
        return this.Manager
    }

}

    