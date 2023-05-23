let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
            console.log("Resolve after 2 seconds")
            resolve(56)
    }, 2000)
})

p1.then((value)=>{
    console.log(value)  // In the below line there is the custom promise that created by Us.
    // let p2 = new Promise((resolve, reject)=>{
    return new Promise((resolve, reject)=>{  // yaha par hume naye variable banane ki bhi jarurat nahi hai
            setTimeout(() => { resolve("Promise 2") },2000)
            
    })
    // return p2
}).then((value)=>{
    console.log("we are done")
    // console.log(value);  // yaha par es se upper wale .then ki value resovle hoke call hui hai
    return 2
}).then((value)=>{
    console.log("Now we are pakka done")
    // console.log(value);  // yaha par es se upper wale .then ki value resovle hoke call hui hai
})

