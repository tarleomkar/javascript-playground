// Stack (primitive)
// Heap (Non-primitive)

// Stack
// We get the only copy of the variable
let myYoutubeName = "hiteshchoudharydot.com"

let myAnotherName = "myYtName"

console.log(myYoutubeName);
console.log(myAnotherName);

// Heap
// we can actually get refrence of the value
let userOne = { 
    userEmail: "tarle@gmail.com",
    upi: "omkar@123"
}

let userTwo = userOne;

userTwo.userEmail = "Omkar@gmail.com";

console.log(userOne.userEmail);
console.log(userTwo.userEmail);
// Output
// Omkar@gmail.com
// Omkar@gmail.com

// Conclusion
// Stack gives us value where heap gives direct refrence