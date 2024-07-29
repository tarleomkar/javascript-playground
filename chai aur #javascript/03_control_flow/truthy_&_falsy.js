// In JavaScript, "truthy" and "falsy" values are terms used to describe how non-boolean values are coerced into boolean values when evaluated in a boolean context, such as in conditionals (if statements) or logical operations.
const userEmail = "omkar@.ai"
// const userEmail = ""
// const userEmail = []

// if (userEmail)
// {
//     console.log("Got user email");
// }
// else
// {
//     console.log("Don't have user email");
// }

// Truthy values
// "0",
//  'false', => because you write in string then it is truthy
// " ",
// [],
// {},
// function () {}
// also
// false == 0
// false == ''
// 0 == ''

// if(userEmail.length === 0)
// {
//     console.log("Array is empty");
// }

// const emptyObj= {}

// if(Object.keys (emptyObj).length === 0)
// {
//     console.log("Object is empty");
// }

// Falsy value
// false, 0, -0, BigInt 0n, 
// empty string = "",
// null, undefined, NaN

// Nullish Coalescing Operator (??): 
// only two keywords => 1) null 
// 2) undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 15
val1 = null ?? 10 ?? 10

// console.log(val1);

// Ternary Operator
// condition ? true : false

const icePrice = 100
icePrice >= 80 ? console.log('less than 80') : console.log('more than 80');