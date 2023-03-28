let num = [3, 5, 1, 2, 4]

// classical for loop in js
// for (let i = 0; i < num.length; i++){
//     console.log(num[i])
// }


// ForEach Loop   // this is very useful
num.forEach((element) => {
console.log(element*element)
})

// Array.from  // this is the example but we use more often these at html collections
let name = "Harry"
let arr = Array.from(name)
console.log(arr)  

// for...of  // this is more convinient rather than the classical for loop for printing the elements of an array
for (let item of num){
    console.log(item)
}

// for...in
for (let i in num){
    console.log(i) // if i do this then this will print keys of an arry
    console.log(num[i]) // if i do this then this will print the elements of an array
}