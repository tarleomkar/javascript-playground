/* The `static` keyword in JavaScript is used to define a static method or property for a class. Static
methods are called on the class itself, rather than on instances of the class. In the provided code
snippet, the `createId()` method is a static method of the `User` class. This means that it can be
called directly on the class without needing to create an instance of the class first. */
// static

class User 
{
    constructor(username)
    {
        this.username = username
    }
    // method below
    logMe()
    {
        console.log(`Username: ${this.username}`);
    }

    static createId()
    {
        return `123`
    }
}

const omkar = new User("Omkar")
// console.log(omkar.createId()) // 123

class Teacher extends User {
    constructor(username,email)
    {
        super(username)
        this.email = email
    }
}

const numberBuds = new Teacher('omkar', "iphone@.com")
console.log(numberBuds.logMe())