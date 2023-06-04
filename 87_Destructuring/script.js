let arr = [3, 5, 8, 9, 12, 15, 18]
// No need to do this
// let a = arr[0]
// let b = arr[1]
// let [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d, rest)

// let [a, , b, ...rest] = arr
// console.log(a, b, rest)

let { a, b } = { a: 1, b: 5 }
console.log(a, b)

// spread operator
let arr1 = [3, 5, 8]
let obj1 = { ...arr1 }
console.log(obj1)

function sum(v1, v2, v3) {
    return v1 + v2 + v3
}

console.log(sum(...arr1))



// const a = "The" 
// const b = "no"
// const c = {a, b}
// console.log(c)

let obj2 = {
    name: "Fahil",
    company: "Company XYZ",
    address: "XYZ"
}

// console.log({...obj2, name: "Jhon", company: "ABC"})
console.log({ name: "Jhon", company: "ABC", ...obj2 })  // This will print the obj2 object without changing any values

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax