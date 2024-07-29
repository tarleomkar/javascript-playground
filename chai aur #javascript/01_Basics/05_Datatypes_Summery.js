// # primitve

// call by values datatypes
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoogedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 35345654654746n;

// Refrence types (Non primitive)
// Array, Objects, Functions are refrence type. They hold the reference to the memory location of data not the value itself

const heros = ["Hanuman", "ShreeKrishn", "Arjun"];
 
// Using a for loop
for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}

// Using a forEach loop
heros.forEach(hero => {
    console.log(hero);
});

// Objects
let myObj = {
    name: "Omkar",
    age: 22
}
console.log(myObj)

// functio{ns
const myFunction = function()
{
    console.log("Hello world!");
}
myFunction();

// how to know about datatype of variable
console.log(typeof bigNumber); // bigint
console.log(typeof myFunction); // function
