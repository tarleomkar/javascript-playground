// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let myCreateDate = new Date(2024, 2, 24)
let myCreateDate2 = new Date(2024, 2, 24, 5, 3)
console.log(myCreateDate.toDateString()); // 24/3/2024
console.log(myCreateDate2.toLocaleString()) // 24/3/2024, 5:03:00 am

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log((`${newDate.getDay()} and Time is ${newDate}`));

newDate.toLocaleString('default', {
    weekday: "long"
})