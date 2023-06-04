
// message = "Good Global"

// function hello1() {
//     let message = "Goog Morning"

//     // let message = "Good Afternoon"
//     console.log("Hello 1: " + message)

//     // console.log(message)

//     let c = function hello2() {
//         console.log("I am c" + message)
//     }
//     return c
// }

// c = hello1()
// c()




// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     name = "Afjal"
//     return displayName;
// }
// let c = init();
// c()


// nested function closures
function returnFunc() {
    const x = () => {
        let a = 1
        console.log(a)
        const y = () => {
            // let a = 2
            console.log(a)
            const z = () => {
                // let a = 3
                console.log(a)
            }
            z()
        }
        a = 999
        y()
    }

    return x
}

let a = returnFunc()
a()



// example 1
function sum() {
    return function (a, b) {
        return a + b
    }
}

const result = sum()
console.log(result(3, 5))




// example 2
function outerFunction() {
    var outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  var closure = outerFunction();
  closure();
  