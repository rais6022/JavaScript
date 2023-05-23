const f = () => {

    try {
        let a = 0
        // console.log(program)
        console.log("Program ran successfully")
        return
    }
    catch (err) {
        console.log("This is an error")
        console.log(p) // if catch is also showing error then the finallly works
    }

    finally {
        console.log("I am a good boy")
        // finally hum cleanups karne ke liye use karte hai
        // close the file 
        // exit the loop
        // write to the log file
    }
}
f()
console.log("End")