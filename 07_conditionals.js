const prompt = require("prompt-sync")({sigint:true}); // we need this because this is require for run the prompt 
let a = prompt("What is your age?")
a = Number.parseInt(a) // converting the string to a number45
if(a<0){
    alert("This is a invalid age");
}
else if(a<9){
     alert("You are a kid and you cannot even think of driving"); 
}
else if(a<18 && a>=9){
     alert("You are a kid and you can think of driving after 18"); 
}
else{
    alert("You can drive as you are above 18")
}
console.log("Done")  
// homework - Explore switch statement and write a basic program in the comments
console.log("You can",(a<18? "not drive" :"Drive"))





 // This code is on replit also here the promt and alert is not working

 