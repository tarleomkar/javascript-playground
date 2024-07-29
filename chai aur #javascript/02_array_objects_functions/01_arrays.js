// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Hanuman", "ShreeRam"];

const myArr2 = new Array(4,6,8);
// console.log(myArr2[0]); // 4

// Array Methods
myArr.push(6) // add element 6 to the end
myArr.push(9) // add element 9 to the end
myArr.pop(); // remove the last element

myArr.unshift(5) // insert at starting position
myArr.shift() // removing the starting unshifted array elemtns

// console.log(myArr.includes(4)); // true
// console.log(myArr.indexOf(2)); // 2

// console.log(myArr);

// const newArr = myArr.join();

// console.log(typeof newArr); // string
// console.log( newArr); // 0,1,2,3,4,5,6

// slice, splice
// Slice:
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

// splice():
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);

console.log(myn2);

