let a = [
    "Initializing Hack tool",
    "Connectiong to Facebook",
    "Connecting to server",
    "Connecting failed. Retrying.........",
    "Connecting to server 2",
    "Connected Successfully .....",
    "Username iamharry",
    "Trying Brute Force",
    "200k passwords tried....",
    "Match not found",
    "Another 200k passwords tried....",
    "Match found",
    "Accessing Account",
    "Please Wait..",
    "Hack Successful"
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    })
}
const showHack = async (messages) => {
    await sleep(2)
    // console.log(messages)
    text.innerHTML = text.innerHTML + messages + "<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i])
    }
})()