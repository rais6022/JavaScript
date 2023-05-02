// Tag name and Node name 

let a = document.getElementsByTagName('span')[0]
console.log(a)
let b = document.getElementsByTagName('span')[0]
console.dir(b)

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

// // inner html and outer html
// first.innerHTML
// first.innerHTML = "<i> hey i am italic </i>"
// first.outerHTML
// first.outerHTML = "<div>hey</div>"

// if we want to access the other node type we can use nodeValue or data

// document.body.firstChild // by this we can access the first child
// document.body.firstChild.data // by this we can access the node of first child
// document.body.firstChild.nodeValue // same as the .data

// console.log(document.body.textContent)

// first.hidden = false