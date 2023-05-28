class Employee {
    login() {
        console.log(`Employee has logged in`);
    }
    logout() {
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves`)
    }
}

class Programmer extends Employee {

    constructor(name) {
        super(name)
        console.log(`This is a newly written constructor`)
    }
    // constructor(...args){ ----> If there is no constructor in the child class, this is created automatically
    // super(...args)
    // }


    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffee`)
    }
    requestLeaves(leaves) {
        super.requestLeaves(4)  // this is the super method for overriding the Employee Class
        console.log("One Extra is granted")
        // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`) // This we can call as method overriding
    }
}

let e = new Programmer("Harry")
e.login()
e.requestLeaves(3)
