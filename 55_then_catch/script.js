let p1 = new Promise((resolve, reject) =>{
    console.log("Promise is pending")
    setTimeout(()=>{
            
            // console.log("I am a promise and i am fulfilled")
            resolve(true)

            
            // console.log("I am a promise and i am rejected")
            // reject(new Error("I am an error"))
    }, 5000)
})


let p2 = new Promise((resolve, reject) =>{
    console.log("Promise is pending")
    setTimeout(()=>{
            
            // console.log("I am a promise and i am fulfilled")
            // resolve(true)

            
            // console.log("I am a promise and i am rejected")  // we are not using console in promise we are using it with .then or . catch
            reject(new Error("I am an error"))
    }, 5000)
})

// console.log(p1, p2)

// To get the value with the help of .then()
p1.then((value)=>{
    console.log(value)
})

// To catch the error with the help of .then()
p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})


// To catch the errors with the help of .catch()
p2.catch((error)=>{
    console.log("some error occured in p2")
})




// This is for if we want the successfully promise will be resolved
let promise = new Promise (resolve => {
    setTimeout(()=>resolve("done"), 1000)
});
promise.then(alert);
