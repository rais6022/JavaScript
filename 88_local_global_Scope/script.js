
let p = 9  // this is global scope

function ax(){ 
let a = 8;
console.log(a)
console.log(p)
}

ax()
console.log(p)
console.log(a)