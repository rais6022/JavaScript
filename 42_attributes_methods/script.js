let first = document.getElementById("first") 
let a = first.getAttribute("class")
// console.log(a) 
//console.log(first.hasAttribute("class")) // yeh true return karega because class naam ka attribute exist karta hai 
//console.log(first.hasAttribute("style")) // yeh false return karega because style naam ka attribute exist nahi karta hai in the html

// first.setAttribute("hidden", "true")  
// first.setAttribute("class", "true sachin")  // yeh mthod kaam ata hai koi attribute ko nayi value dene k liye


// first.removeAttribute("class")  // yeh method kaam ata hai poore attribute ko remove kare ka liye 

// console.log(first.attributes) // by the help of this method i get all the attribute which is present in the first id

console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)