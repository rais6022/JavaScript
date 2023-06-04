let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(434)
        }, 4000)
    })
}

(async () => {

    let b = await p()
    console.log(b)
    let c = await p()
    console.log(c)
    let d = await p()
    console.log(d)
})()

// console.log(d) // This ain't work!