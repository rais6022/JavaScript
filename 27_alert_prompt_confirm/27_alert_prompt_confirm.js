// This file is at he replit account please visit to the replit


alert("Enter the value of a!")  // alert value ko as a string leta hai
let a = prompt("Enter a here", "597")    // ',' koma k baad ki value default value hoti hai,  yeh hume starting me hi dikhai de jati hai
// document.write(a)
a = Number.parsInt(a)  // if we want to convert the string into number then we have to do this
alert("You entered a of type " + (typeof a))


let write = confirm("Do you want to write it to the page")
if(Write){  
document.write(a)  // if we do this then it adds the value to the another value
}
else{
  document.write("please allow me to write")
}
