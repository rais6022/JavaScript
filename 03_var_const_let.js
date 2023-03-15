console.log("JavaScript tutorial 3: var, let and const")
// var a = 45;
// var a = "p"  // it means it can be re-declared and updated 
let b = "harry";
b = 4  // this can be updated but cannot re-dclared for eg: let b = 4
const author = "Harry"  // it can neither be updated nor be re-declared
// author = 5 // throws an error because constant cannot be changed
// let author = 5 // throws an error because constant cannot be re-declared
const harry = 0;  // it should be initilised
let c = null
let d = undefined
{
  let b = 'this'
  console.log(b)
}
console.log(b)