let score = "33abc"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); 
// console.log(valueInNumber);

// "33" => 33
// 33abc => Nan
// true => 1;
// false => 0

// Boolean Conversion
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // True

// Observation
// 1 => true; 0 => false
// "" => false
// "omkar" => true

// Converting to string
let someNumber = "63"

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ************* Operations ***************
let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " omkar"

let str3 = str1 + str2
console.log(str3)

// COnfusing conversions
console.log("1" + 2);
console.log(1 + "2");
// 12
// 12

// But when adding three values it behaves like following
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
// 122
// 32

// console.log((3 + 4) * 5 + 3); // Do not write this messy code

console.log(+true)
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter)