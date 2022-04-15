module.exports = class pokemon {
    constructor(name) {
        this.name = name;
    }

    sayHello(message) {
        console.log(`Mi pokemon ${this.name} te saluda!!!`);
    }
    sayMessage(message) {
        console.log(`Mi pokemon dice ${message}`);
    }
}
