
// // Example of Syncronous programming
// let a = prompt("What is your name?");
// let b = prompt("What is you age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// // Example of Asyncronous programming
// console.log("Start")
// setTimeout(function() {
//   console.log("Hey I am good!")
// }, 3000)
// console.log("End")



// Callbacks example
// This is the simpler explaination from chat gpt 
// function greet(name, callback) {
//   console.log('Hello, ' + name + '!');
//   callback(); // invoking the callback function
// }

// function sayGoodbye() {
//   console.log('Goodbye!');
// }
// function sayHaveANiceDay() {
//   console.log('Have A Nice Day!');
// }

// greet('Alice', sayHaveANiceDay);  // phele to name define karunga fir main yaha par callback function ko invoke karunga. or main yaha par koi bhi function as a callback use karsakta hoon





// Calbacks with handlin errors
function loadScript(src, callback) {
    var script = document.createElement("script");  // Create a new <script> element
    script.src = src;  // Set the source (SRC) attribute of the <script> element to the provided 'src'
  
    script.onload = function() {  // this is running while loading the script
      console.log("Loaded script with SRC: " + src);  // Print a message indicating that the script has been loaded
      callback(null, src);  // Invoke the provided 'callback' function
    }
     script.onerror = function() {
      console.log("Error loading script with SRC: " + src); 
       callback(new Error("Src got some error"))
      }
    
    document.body.appendChild(script);  // Append the <script> element to the <body> of the document
  }
  
  
  
  
  function hello(error, src){
    if(error){
      console.log(error)
      return
    }
    alert('Hello World!' + src);
  }
  
  function goodmorning(error, src){
    if(error){
      console.log(error)
      return
    }
    alert('good morning!' + src);
  }
  
  
  // This is without error script
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", goodmorning)
  
  // // This is with error script
  // loadScript("https://cdn.jsdedghkhlivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", hello)
  