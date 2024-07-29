const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})

// 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async task 2 resolved");
})

// 3
// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() 
//     {
//     resolve({userName: "Omkar",
//     email: "tarleomkar8@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user) {
//     console.log(user);
// })

// 4
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // let err = true // Error: Somethin went wrong
        let err = false 
        if(!err)
        {
            resolve({userName: "Omkar", password: "1234"})
        }
        else
        {
            reject('Error: Something went wrong')
        }
    }, 1000)
})

/* `Chainig` is a typo and should be corrected to `Chaining`. The chaining in the code snippet is
demonstrating how to chain multiple `then` handlers on a Promise. */
// Chainig
promiseFour
.then((user) => {
    console.log(user);
    return user.userName
}).then((userName) => {
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

// 5
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function() {
        let err = true
        if(!err)
        {
            resolve({userName: "Omkar", password: "1234"})
        }
        else
        {
            reject('Error: Js went wrong')
        }
    }, 1000)
})

// async & await syntax
async function consumePromiseFive()
{
    try 
    {
        const response = await promiseFive
        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}

consumePromiseFive() // Error: Js went wrong

// async function getAllUsers()
// {
//     try
//     {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     // console.log(response);
//     }
//     catch(error)
//     {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// with .then() & .cathc() method
// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://jsonplaceholder.typicode.com/users')

.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))