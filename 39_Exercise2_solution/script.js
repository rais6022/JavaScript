let user = prompt("Enter S W or G ")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI]

const match = (cpu, user)=>{
  if(cpu === user){
    return "Nobody, Match is tied"
  }
  else if(cpu === "S" && user === "W"){
      return "cpu"
  }
  else if(cpu === "S" && user === "G"){
      return "user"
  }
  else if(cpu === "G" && user === "W"){
      return "user"
  }
  else if(cpu === "G" && user === "S"){
      return "cpu"
  }
  else if(cpu === "W" && user === "S"){
      return "user"
  }
  else if(cpu === "W" && user === "G"){
      return "cpu"
  }
}
let result = match(cpu, user) 
// console.log('The winner is: ' + result)  // we cannot use this right now because we are at webview
// document.write('The winner is: ' + result) // if we want to reveal who winns the we do this downside 
document.write( `CPU:${cpu} <br> USER:${user} <br> The winner is: ${result.toUpperCase()}` )