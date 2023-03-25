// prompt is not working in the vs code so run this code in the replit
// for (let i = 0; i < 5; i++){
//   console.log(i)
//   console.log(i+1)  // yeh esliye kiya because yaha par hume 5 bhi print karna hai
// }

// Program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)  // kyunki natural number 1 se start hota hai
  console.log((i+1), "+")
  // console.log(sum) // if i print this sum here inside the loop this will return sum of number with the loop 
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)  // if i use var instead of let then it will print otherwise it will not
// console.log(sum) // if i print this sum here outside the loop this will return sum of the no's only

 
/*
let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Harry") {
  console.log(b)
}
*/