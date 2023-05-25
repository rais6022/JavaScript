
// // method 1   - using normal syntax

// let options = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({  // yeh ek javascript object ko string me convert kar deta hai
//         title: 'Barry',
//         body: 'bhai',
//         userId: 1100,
//     }),
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then((response) => response.json())
//     .then((json) => console.log(json));







// // method 2  - using async await

// const createTodo = async () => { 
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({  // yeh ek javascript object ko string me convert     kar deta hai
//             title: 'Barry',
//             body: 'bhai',
//             userId: 1100,
//         }),
//     }
// let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response
// }

// const mainFunc = async () => {
//     let todo = await createTodo()
//     console.log(todo)
// }

// mainFunc()




// // method 3   - passing todo object to the function
// const createTodo = async (todo) => { 
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(todo),
//     }
// let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response
// }

// const mainFunc = async () => {
//     let todo = {  
//             title: 'Barry',
//             body: 'bhai',
//             userId: 1100,
//         }
//     let todor = await createTodo(todo)
//     console.log(todor)
// }

// mainFunc()





// method 4   - taking the id of the getTodo new variable
const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response= await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
        title: 'Harry2',
        body: 'bhai2',
        userId: 1100,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(101))
}

mainFunc()