// loadscript

const loadScript = (url) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = url
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script has been loaded sir")
        }
        script.onerror = () => { reject(0) }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value)
    // console.log("done")
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
}).then((value) => {
    console.log("second script is ready")
}).catch((error) => {
    console.log("we are sorry but we are having problems loading this script")
})