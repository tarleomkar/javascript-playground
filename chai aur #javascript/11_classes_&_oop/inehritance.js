Inheritance

class User {
    constructor(userName)
    {
        this.userName = userName
    }

    logMe()
    {
        console.log(`USERNAME: ${this.userName}`);
    }
}

// inhertiance

class Teacher extends User
{
    constructor(userName, email, password)
    {
        super(userName)
        this.email = email
        this.password = password
    }

    addCourses()
    {
        console.log(`A new course was added by ${this.userName}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log((chai instanceof Teacher)); // true
console.log((chai === masalaChai)); // false
console.log((chai === Teacher)); // error

