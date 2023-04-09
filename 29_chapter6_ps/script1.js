// prombem no1


// let age = prompt("Enter your age!")
// age = Number.parseInt(age)

// const canDrive = (age)=> {
//   return age>=18? true: false
// }

// if(canDrive(age)){
//   alert("Yes you can drive")
// }
// else{
//   alert("You cannot drive")
// }

// this is not calling function

// if(age>20){
//   alert("you can drive!")
// }
// else{
//   alert("you cannot drive!")
// }




// problem 2

// let runAgain = true
 
// const canDrive = (age)=> {
//   return age>=18? true: false
// }
 
// while(runAgain){
  
//   let age = prompt("Enter your age!")
//   age = Number.parseInt(age)

// if(canDrive(age)){
//   alert("Yes you can drive")
// }
// else{
//   alert("You cannot drive")
// }
// runAgain = confirm("Do you want to play again")
// }

// problem no 3


let runAgain = true
 
const canDrive = (age)=> {
  return age>=18? true: false
}
 
while(runAgain){
  
  let age = prompt("Enter your age!")
  age = Number.parseInt(age)
  if (age<0){
    console.error("Please enter a valid age")  // error ska use kiya gaya hai yaha par for -ve value ke liye
    break;
  }

if(canDrive(age)){
  alert("Yes you can drive")
}
else{
  alert("You cannot drive")
}
runAgain = confirm("Do you want to play again")
}
