let p1 = new Promise((resolve, reject)=>{
    // alert("Hey I am not resolved")
    setTimeout(()=>{
       resolve(1)
    }, 2000)
})


p1.then(() => { // This is the handler first connected to p1 promise
    console.log("Hurray")
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            alert("Now this is resolved afer hurray and congo")
            resolve(4)
        }, 5000)
    })
}).then((value)=>{console.log(value) })

p1.then(()=>{  // This is the handler second connected to p1 promise
    console.log("Congratulations this promise is now resolved")
})

