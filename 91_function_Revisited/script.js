
// const sayHello = () => {
//     console.log("Hello")
// }

// const sayHello = (name, greeting) => console.log(greeting + " " + name);


// sayHello("harry" , "Good Afternoon") 


const x = {
    name: "Afjal",
    branch: "Information technology",
    year: 4,
    show: function () {
        // let that = this
        // console.log(this)
        // setTimeout(function(){ // if i use traditional function there is need to declare this as that first 
        setTimeout(() => {
            // console.log(this)
            // console.log(`The name is ${that.name}\nThe Branch is ${that.branch}`)
            console.log(`The name is ${this.name}\nThe Branch is ${this.branch}`)

        }, 5000)
    }
}

// console.log(x.name, x.year)
x.show()


