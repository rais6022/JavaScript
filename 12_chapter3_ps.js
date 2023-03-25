// Problem no.1 

let marks = {
    Abrar: 45,
    Saniya: 55,
    Rehan: 23,
    Najran: 40,
}
// problem no.1
for (let i = 0; i < Object.keys(marks).length; i++) {
    // console.log("The marks of " + Object.keys(marks)[i] + " are: " + marks[Object.keys(marks)[i]])
}

// problem no.2
for (let key in marks) {
    // console.log("The marks of " + key + " are: " + marks[key] )
}

// problem no.3

// let cn = 43
// let i 
// while(i != cn) {  
//     console.log("Try again")
//     i = prompt("Enter the number") 
// }
// console.log("You have entered a correct number !")

// problem no.4

const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
}
console.log(mean(4, 5, 6, 7))