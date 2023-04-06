//Array Methods 

let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string
console.log(b)
console.log(b,typeof b)

let c = num.join("_")  // 
// let c = num.join("and")
console.log(c)
console.log(c, typeof c) // eska type string hai yeh join method bhi array ko string me convert kar deta hai

//num.pop()  // yeh method array ke ander se se last element ko pop out kar deta hai
//console.log(num) //  ab yaha per print karane se last element print nahi hoga 

// if i want to return that which element is being poped
//let r = num.pop() // pop returns the poped element
// console.log(num, r)

let r = num.push(56) // push returns the new array length  and push the new element in the array in last
console.log(num, r ,typeof r)


// let r = num.shift() // yeh aage wale element ko nikal dega array me se and usko array ko modify kar dega
// console.log(r, num) // Removes an element from the start of the array


// let e = num.unshift(78) // yeh aage ek element ko add dega array me and usko array ko modify kar dega
// console.log(r, num, typeof e) // and also returns new array length

