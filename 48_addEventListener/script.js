

let x = function(e){ // refer to the notes 
    console.log(e.target)  // es se mujhe yeh pata chelega k maine kaha par click kiya hai uski class ya id show ho jayegi 
    console.log(e)
    
    console.log(e.type, event.clientX, event.clientY)
    alert("Hello World!1")
  }
  
  // let y = function(e) {
  //     console.log(e)
  //   alert("Hello World!2")
  // }
  
  
  
  
  
  btn.addEventListener('click', x)
  
  // btn.addEventListener('click', y)
  
  
  
  
  // let a = prompt("What is your favourite number?")
  // if (a == "2") { // sirf 2 par hi kaar karega
  //   btn.removeEventListener('click', x)
  // }
  
  