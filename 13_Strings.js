let name = "Rais" // double quote se bani hui string ko double quote se hi band karoge or single ko single se
console.log(name)
console.log(name.length) // by this we can know the length of a string
console.log(name[0])  // yeh batayega k what character at 0 index in the string
console.log(name[1])


let friend = 'Afjal'
console.log(friend)

//let myFriend = "Shubh'  // this is not allowed in the strings so, don't do this
//console.log(myFriend) // this may be printed or may not be 

// Template literals
let boy1 = "Pramod"
let boy2 = "Nikhil"
// Nikhil is a friend of pramod  // mai ese likhna chahta hoon
// let sentence = `boy2 is a friend of boy1`  // agar mai yeh karu to string as it is print ho jayegi
let sentence = `${boy2} is a friend of ${boy1}`  //  
console.log(sentence)

// Escape Sequence Characters

// let fruit = 'Bana\'na'  // in this we are using single qute escape sequence character
// console.log(fruit)
let fruit = "Bana\"na"  // in this we are using single qute escape sequence character
console.log(fruit)
console.log(fruit.length) // if i do .length then the length is only of 7 not 8


// Done!