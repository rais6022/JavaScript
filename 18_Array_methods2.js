// delete is not a method it is an operator like wise typeof

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [21, 22, 23, 24, 25, 26, 27, 28, 29]


// let r = delete num[0]
// console.log(num.length) // delete karne se phele ki length 
// delete num [0]
// console.log(num)
// console.log(num.length) // delete karne ki baad ki length
// console.log(num, num.length)


// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)


// Sort method

// let num = [1, 22, 3, 14, 25, 216, 87, 98, 79]
// num.sort()
// console.log(num) // this sort alphabetically 

// This sort by using compare function

// let compare = (a, b)=> {
// return a - b
// return b - a  // if we want to print the value in the decending order, the we do this
// }
// let num = [1, 22, 3, 14, 25, 216, 87, 98, 79]
// num.sort(compare)
//num.reverse()  // yeh ulta kar dega array ko this is not so much useful
// console.log(num)  // now this sort in assending order


// Splice and Slice method

// let num = [1, 22, 3, 14, 25, 216, 87, 98, 79]
// // num.splice(2, 3, 44, 54)
// // console.log(num)

// let deleted_values = num.splice(2, 3, 44, 54)
// console.log(deleted_values)
// console.log(typeof deleted_values)


let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]


// num.slice(3)  
// console.log(num) // As i see here the slice does not work it only work with the new array only
// So, i need to make a new array. Then only the slice works

// let newNum = num.slice(3)  // yeh index no. 3 leke saare print kar dega 
let newNum = num.slice(3, 5) // yeh index no. 3 se leke 4.     5 print nahi karega
console.log(newNum)
