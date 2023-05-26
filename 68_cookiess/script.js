console.log(document.cookie)
document.cookie = "name1=raisofo87495734597"
document.cookie = "name2=rais23ofo87495734597"
document.cookie = "name3=rais245568ofo87495734597"
document.cookie = "name1=rais4569875200ofo87495734597"

let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)