class Animal {
    constructor(name) {
        this._name = name  // conventionally, a preceding underscore (_) indicates a private property
    }
    fly() {
        console.log("Mai ud raha hoon")
    }
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
}

class Rabbit extends Animal {
    eatCarrot() {
        console.log("Eating Carrot")
    }
}


// let a = new Animal("Razi")
let a = new Rabbit("Bruno")
a.fly()
console.log(a.name)
a.name = "jack"
console.log(a.name)


console.log(a instanceof Animal)
console.log(a instanceof Rabbit)

let c = 56;
console.log(c instanceof Animal)