// class User {
//     constructor(username, email, password)
//     {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptedPassword()
//     {
//         return `${this.password}abc`
//     }
//     changeUserName()
//     {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Chai", "Chai@gmail.com", "123")

// console.log(chai.encryptedPassword());
// console.log(chai.changeUserName());

// Behind Scene

function User(username, email, password)
{
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptedPassword = function()
{
    return `${this.password}abc`
}

User.prototype.changeUserName = function()
{
    return `${this.username}abc`
}

const tea = new User("tea", "tea@gmail.com" , "123")

console.log(tea.encryptedPassword());
console.log(tea.changeUserName());

