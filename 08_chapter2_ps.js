// Chapter 2 ps
// problem no 1
/*
let age = prompt("What is your age?")
age = Number.parseInt(age)
if(age > 10 && age<=20){
    console.log("Your age lies between 10 and 20")
}
else{
    colsole.log("Your age does'nt lies between 10 and 20 " )
}
*/ 

// problem no2
/*
let age = prompt("what is your age?")
switch(age){
    case '12':
        console.log("Your age is 12")
    break;
    case '13':
        console.log("Your age is 13")
    break;
    case '14':
        console.log("Your age is 14")
    break;
    case '15':
        console.log("Your age is 15")
    break;
    default:
        console.log("Your age is not special")
    break
}
*/

// problem no3
/*
let num = prompt("What is your age?")
num = Number.parseInt(num)
if(num%2==0 && num%3==0){
  console.log("your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}
*/

// problem no4
/*
let num = prompt("What is your age?")
num = Number.parseInt(num)
if(num%2==0){
  console.log("your number is divisible by 2 only")
}
  if(num%3==0){
    console.log("your number is divisible by 3 only")
  }
else {
  console.log("Your number is not divisible by 2 and 3")
}
*/

// problem no5

// let age = prompt("What is your age")
// age = Number.parseInt(age)
// (age>18 ? "You can drive" : "you cannot drive")
let age = 19
let a = age >= 18 ? "you can drive " : "you cannot drive"
console.log(a)

