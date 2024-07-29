// singelton

// object literals
// Object.create (constructor method)
const mySymbol = Symbol("key1")

const jsUser = {
    name: "Omkar",
    // mySymbol: "mykey1",
    [mySymbol]: "mykey1",
    age: 21,
    location: "Nashik",
    email: "tarleomkar8@gmail.com",
    isLoogedIn: false,
    lastLoggedIn: ["Monday", "Friday"]
}

// console.log(jsUser.email); // tarleomkar8@gmail.com
// console.log(jsUser["email"]) // tarleomkar8@gmail.com
// console.log(jsUser["name"]) // Omkar
// console.log(jsUser[mySymbol]) // mykey1

// changing values
jsUser.email = "omi@gmail.com"
// console.log(jsUser.email);  // omi@gmail.com

// Locking the values (cannot easily changed)
// freeze
// Object.freeze(jsUser)
// console.log(jsUser)

jsUser.greeting = function()
{
    console.log("Hello js user omii");
}

// console.log(jsUser.greeting);  // [Function (anonymous)]
// console.log(jsUser.greeting());  // Hello js user omii undefined

jsUser.greetingTwo = function()
{
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
// Output
// Hello JS user, Omkar
// undefined