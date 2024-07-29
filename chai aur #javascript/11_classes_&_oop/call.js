function setUserName(userName)
{
    // complex db calls
    this.userName = userName
    console.log("called");
}

function createUser(userName, email, password)
{
    setUserName.call(this, userName)
    
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", 123)
console.log(chai);

// What is this?
// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With call(), an object can use a method belonging to another object.