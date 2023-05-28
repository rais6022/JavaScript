class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run() {
        console.log(this.name + " is running")
    }
    shout() {
        console.log(this.name + " is barking")
    }
}

class Monkey extends Animal {
    eatBanana() {
        console.log(this.name + " is eating banana")
    }
    hide() {
        console.log(`${this.name} monkey is hiding of color ${this.color}`)
    }
}
let ani = new Animal("Bruno", "white")
let m = new Monkey("Chimpu", "orange")

ani.shout()
m.eatBanana()
m.hide()
console.log(m.name);
// ani.hide() // This will throw an error because hide meethod is not defined in the Animal class
