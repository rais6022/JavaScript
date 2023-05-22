
setTimeout(() => {
    console.log("Hacking wifi.... Please Wait....")
}, 1000)


try {  // try & catch are working synchronously
    setTimeout(() => {
        // console.log(rahul)  // now this is asynchronous so the error is shown in this 
        // or if we want that they don't show error so we can again apply try and catch here 

        try {
            console.log(rahul)
        }
        catch (error) {

        }
    }, 100)
}
catch (error) {
    console.log("Balle Balle")
}


setTimeout(() => {
    console.log("Fetching username and password.... please wait.....")
    // console.log(rahul)  // if put this clg outside this setTimeout
}, 2000)

setTimeout(() => {
    console.log("Hacking Rahul's facebook id.... please wait.....")
}, 3000)

setTimeout(() => {
    console.log("Username and password of Rahul (+919845678355) are Fetched.... please wait.....")
}, 4000)

