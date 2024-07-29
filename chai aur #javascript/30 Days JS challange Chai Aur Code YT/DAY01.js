// # # Day 01 : Variable and data type

// # # # Achievement

// # know how to declare variable using var , let and const
// # understand the different data type in javascript
// # be able to use the typeof operator to identify the data type of a variable
// # understand the concept of variable resassignment and the immutability of const variable

// 1 var
/*
var city = "Pune";
console.log(city); // Pune

{
    var city = "Nashik";
    console.log(city); // Nashik
}

console.log(city) // Nashik
*/

// Observation
// var is the function scope

// 2. let
/*
let city = "Pune";
console.log(city); // Pune

{
    let city = "Nashik";
    console.log(city); // Nashik
}
console.log(city); // Pune
*/

// Observation
// let is blocked scope variable

// 3. const
const city = "Pune";
console.log(city); // Pune

{
    const city = "Nashik";
    console.log(city); // Nashik
}
console.log(city); // Pune 

// Observation
// const is also blocked scope