let arr = [45, 23, 21]
// console.log(arr)


// Array map method
// let a = arr.map((value, index, array) => {
//     // let a = arr.map((value)=>{
//     // arr.map((value)=>{
//     // console.log(value)
//     console.log(value, index, array)
//     return value + index
// })
// console.log(a)
// console.log(a, arr)

// Array filter method

let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
    return a < 10
})
// console.log(a2)
// console.log(a2, arr2) // here we can see that the original array cannot change

// Array reduce method

let arr3 = [1, 2, 3, 5, 2, 1]
// let newarr3 = arr3.reduce((h1, h2) => {
//     return h1 + h2
// })
const reduce_func = (h1, h2) =>{
    return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)
 