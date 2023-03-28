 // Here in this there is code of prompt so visit my replit account 
 // Chapter 5 Practice Set 
// Practice Problem 1

// let arr = [2,3,4,5,6,7]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)
// // console.log(b)

// Practice Problem 2
// let arr = [2,3,4,5,6,7]
// let a;
// do {
//   a = prompt("Enter a number")
//   a = Number.parseInt(a)
//   arr.push(a) 
// } while (a != 0);

//  console.log(arr)

// Practice Problem 3

// let arr = [12, 32,44,50,70,80,10,110]
// const filter_func = (x) => {
//   return x % 10 == 0
// }
// let n = arr.filter(filter_func)
// // console.log(n)

// Practice Problem 4

// let a = [2,5,3,7,9,8]
// a.forEach((element) => {
  
//   console.log(element*element)
// })

// let arr = [1, 2, 4, 5, 7, 8, 10, 11]
// const map_func = (x) => {
//   return x * x
// }
// let n = arr.map(map_func)
// console.log(n)

// Practice Problem 5

let arr = [1, 2, 3, 4, 5]
const filter_func = (x1, x2) => {
  return x1 * x2
}
let n = arr.reduce(filter_func)
console.log(n)