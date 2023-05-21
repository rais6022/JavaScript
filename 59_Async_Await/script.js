
// async function harry(){
//     return 5
// }

// harry().then((x)=>{
//     alert(x)
// })



async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 degree")
        }, 4000)
    })
    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 degree")
        }, 9000)
    })


    // delhiWeather.then(alert)
    // bangloreWeather.then(alert)

    console.log("Fetching Delhi Weather Please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW)


    console.log("Fetching Bangalore Weather Please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather: " + bangaloreW)


    return [delhiW, bangaloreW]

}


// const cherry = () => {
//     console.log("Hey I am cherry and I am not waiting")
// }


// console.log("Welcome to Weather control room")

// // harry()

// let a = harry()
// let b = cherry()

// a.then((value)=>{
//     console.log(value)
// })

// // let a = harry()
// // console.log(a)


const cherry = () => {
    console.log("Hey I am cherry and now I am  waiting")
}

const main = async () => {
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()

}
main()


