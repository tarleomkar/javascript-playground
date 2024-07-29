// Return a new array with the square root of all element values:

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => num + 10)
// if i opened scope i need to use return keyword
// const newNums = myNumbers.map((num) => {return num + 10})
// using foreach
// myNumbers.forEach((nums) => {
//     nums = nums + 10
//     console.log(nums);
// })
// console.log(newNums);

// Chaning
const newNums = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
console.log(newNums);
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
//   ]