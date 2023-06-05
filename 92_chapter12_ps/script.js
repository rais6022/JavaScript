// const a = async (text) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text)
//         }, 3000)
//     })
// }

// (
//     async () => {
//         let text = await a("Hello")
//         console.log(text)
//         text = await a("World")
//         console.log(text)
//     }
// )()




// function sum(a, b, c) {
//     return a + b + c
// }
// let x = [1, 3, 5]
// console.log(sum(...x));




// const a = async (text, n = 2) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text)
//         }, 1000 * n)
//     })
// }

// (
//     async () => {
//         let text = await a("I am resolvin after 1 seconds", 1)
//         console.log(text)
//         text = await a("I am resolvin after 4 seconds", 4)
//         console.log(text)
//     }
// )()




function simple(p, r, t) {
    return (p * r * t) / 100;
}

console.log(simple(100000, 5, 1))