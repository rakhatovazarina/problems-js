class Name {
    constructor(firstName, lastName) {
        this.firstName = this.formatName(firstName);
        this.lastName = this.formatName(lastName);
        this.fullName = `${this.firstName} ${this.lastName}`;
        this.initials = this.getInitials();
    }

    formatName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }

    getInitials() {
        return `${this.firstName.charAt(0)}.${this.lastName.charAt(0)}`;
    }
}

const p1 = new Name("john", "SMITH");

console.log(p1.firstName); // "John"
console.log(p1.lastName); // "Smith"
console.log(p1.fullName); // "John Smith"
console.log(p1.initials); // "J.S"

export default Name;
