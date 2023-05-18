document.write("hello")


const sum = (a, b, c) =>{
console.log("Yes i am running" + (a + b + c))
  a + b
}


setTimeout(sum, 1000, 1, 2, 7)

// setInterval(function(){
//   alert("setInterval")
// }, 3000)


// let a = setTimeout(function(){
//   alert("I am inside of settime")
// }, 5000)


// let b = prompt("Do you want to run the settimeout?")
// if("n" == b) {
//   clearTimeout(a)
// }
// console.log(a)
