const user = {
    userName: "Omkar",
    logginCount: 8,
    signedIn: true,
    getUserDetails: function()
    {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.userName}`);
        console.log(this);
    }
}


// console.log(user.userName)
// console.log(user.getUserDetails())
// console.log(this); // {}

function UserFunc(Username, logginCount, signedIn)
{
    this.Username = Username
    this.logginCount = logginCount
    this.signedIn = signedIn

    this.greeting = function()
    {
        console.log(`Welcome: ${this.userName}`);
    }

    // return this (Not matters you can show or not show it, it can print same)
}

const userOne = new UserFunc("Omkar", 13, true)
const userTwo = new UserFunc("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);
// So we getted diffrent copies
// UserFunc { Username: 'Omkar', logginCount: 13, signedIn: true }
// UserFunc { Username: 'ChaiAurCode', logginCount: 11, signedIn: false }

