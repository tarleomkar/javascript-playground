// this keyword
// refers to the current context
const user = {
    username: "Omkar",
    price: 199,

    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage() // Omkar , welcome to website
// // we changed the values/context
// user.username = "Sammy"
// user.welcomeMessage() // Sammy , welcome to website

// console.log(this); // {} empty object

// function chai()
// {
//     let username = "Omkar"
//     console.log(this.username); // undefined
// }
// chai()

// ARROW FUNCTION
const chai = () =>
{
    let username = "Omkar"
    console.log(this.username);
}

chai() // undefined

// Syntax
// If you used the return keyword then you have to used the currly braces {}
// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// If you not used curlly braces then not need of {}
// Implicit return
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Omkar"})

// console.log(addTwo(3, 4)); // { username: 'Omkar' }
// Output
// 7

const myArray = [1, 2, 3, 4, 5]

myArray.forEach((values) =>{
    console.log(values) // 1 2 3 4 5
})
