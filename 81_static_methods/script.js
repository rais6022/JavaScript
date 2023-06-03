class Animal {
    constructor(name) {
        // this.name = name
        this.name = Animal.capitalize(name)
    }
    waldk() {
        // console.log(`Animal ` + this.name +` is walking`)
        console.log(`Animal ${this.name} is walking`)
        // console.log("Animal "  + Animal.capitalize(this.name) + " is walking")
    }
    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

// j = new Animal(Animal.capitalize("janwar"))
j = new Animal("janwar")
j.waldk()


// console.log(j.capitalize("thisaanimal")) // -----> this dosen't work










// this is illustrated by chat gpt

// class MyClass {
//   static staticProperty = "Hello, I am a static property.";

//   static staticMethod() {
//     console.log("Hello, I am a static method.");
//   }

//   regularMethod() {
//     console.log("Hello, I am a regular method.");
//   }
// }

// console.log(MyClass.staticProperty); // Output: Hello, I am a static property.

// MyClass.staticMethod(); // Output: Hello, I am a static method.

// const instance = new MyClass();
// instance.regularMethod(); // Output: Hello, I am a regular method.
