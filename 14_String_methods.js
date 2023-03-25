let name = "Harry\"" // '\' is not countable in the string. And \" is an count as one character in string
// console.log(name)
// console.log(name.length)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2, 4))
// console.log(name.slice(2))
// console.log(name.replace("Har", "Per"))  // we cannot write small har coze this is not available in the orignal string

// let friend = "Naman"
// console.log(name.concat(" is a friend of ", friend, "Ok"))


// let friend2 = "     Meena    "
// console.log(friend2)
// console.log(friend2.trim())

// let fr = "Raman" + "Shivika" + "Harry"
// console.log(fr[0])
// console.log(fr[1])
// console.log(fr[2])
// console.log(fr[3])
// fr[4] = "op" // This is not possible
// console.log(fr)

// Quick Quiz: Use a for loop to print a string

// let naam = "Rais"
// for(i=0; i<naam; i++){
//     console.log(naam)
// }


let naam = "Rais"
for (let i = 0; i < naam.length; i++){
    console.log(naam[i])
}

// let str = "Buzz";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }