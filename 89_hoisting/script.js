
// // Following two lines will run successfully due to hoisting
// console.log(a)
// greet()

// function greet (){
//     console.log("Good Morning")
// }

// var a = 9; // Declaration hoisted to the top but initialization is not 
// console.log(a)





// let a;
// Following two lines will run successfully due to hoisting
console.log(a)
greet()

var greet = function () {
    console.log("Good Morning")
}

var a = 9; // Declaration hoisted to the top but initialization is not 
console.log(a)
