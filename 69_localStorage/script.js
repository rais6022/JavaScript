let key = prompt("Enter Key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)


if(key == "red"  || key == "blue"){
    localStorage.removeItem(key)
}

if (key == 0) {
    localStorage.clear()
}


// localStorage.length

// localStorage.key(0) // yeh at index 0 par konsi key store ho rahi hai woh store karega