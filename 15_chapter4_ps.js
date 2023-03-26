// Chapter 04 - Practice Set
// Problem 01

// console.log("har\"".length)
let str = "Har\""
console.log(str.length)


// Problem 02

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox'; 
// const word = 'fox2'; // agar yahan par fox2 sentence k ander hota toh yeh ture return kar deta warna false
console.log(sentence.includes(word))  // it returns true
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"

// Problem 03

console.log(word.toUpperCase())


// Problem 04

let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))  // it converting the string to the number
// let amount = str2.slice(15)
// let amount = str2.slice("Please give Rs ".length)
console.log(amount)
console.log(typeof(amount))


// Problem 05 
let friend = "Deepika"
friend[3] = "R"
console.log(friend)  // friend is not changed, because string is immutable

"okay done "

