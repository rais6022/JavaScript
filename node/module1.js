const hello = () => {
    console.log("Hello Harry")
}

const ahello = (name) => {
    console.log("Hello " + name)
}
// module.exports = hello;
module.exports = {hello, ahello}; // same as the below line
// module.exports = {hello: hello, ahello: ahello};