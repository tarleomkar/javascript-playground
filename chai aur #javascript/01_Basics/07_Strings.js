const name = "Omkar";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// Using modern String interpollation with help of backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Hello my name is Omkar and my repo count is 50

// 2nd way to declared string

const gameName = new String('Testy');
// console.log(gameName[0]); // T
// console.log(gameName.__proto__); // {}

// console.log(gameName.length); // 5
// console.log(gameName.toUpperCase()); // TESTY
// console.log(gameName.charAt(2)); // s
// console.log(gameName.indexOf('T')); // 0


// const newString = gameName.subString(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(0, 4)
// console.log(anotherString);

// Trim() = To remove extra spaces
const newString2 = "    Omkarr     "
// console.log(newString2);
// console.log(newString2.trim());
// Output
    // Omkarr     
// Omkarr

// Replace() = to replaceing word with another word
const url = "https://omkar.com/omkar%20is%20awesome";
// console.log(url.replace("%20", "-"));
// Output
// https://omkar.com/omkar-is%20awesome

// Asking questions
// console.log(url.includes("omkar")); // true
// console.log(url.startsWith("https://")); // true
// console.log(url.endsWith(".com")); // false

// Split()
// The split() method in JavaScript is used to split a string into an array of substrings based on a specified separator and returns the new array. Here's how it works:

const str = "apple,banana,orange,lemons";   

const fruits = str.split(",")
console.log(fruits);
// output
[ 'apple', 'banana', 'orange', 'lemons' ]