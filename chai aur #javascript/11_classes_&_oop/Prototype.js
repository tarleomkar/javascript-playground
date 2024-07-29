// let myName = "Omkar"
// let myChannel = "chai"

// console.log(myName.trueLength())

let myHeros = ["Thor", "SpiderMan"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function()
    {
        console.log(`Spider power iis ${this.spiderman}`);
    }
}

Object.prototype.omkar = function()
{
    console.log(`Omkar is present in all objects`);
}

Array.prototype.heyOmkar = function()
{
    console.log(`Omkar says hello`);
}

// heroPower.omkar()

myHeros.omkar()
myHeros.heyOmkar()
// heroPower.heyOmkar()

// inheritance

const User = {
    name: "chai",
    email: "cjai@google.com  "
}

const Teacher = {
    makeVideo: true
}

const TeachinSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignemt: 'JS Assignmet',
    fulltime: true,
    __proto__: TeachinSupport
}

Teacher.__proto__ = User
Object.setPrototypeOf(TeachinSupport, Teacher)

let anotherUserName = "ChaiAurCode  "

String.prototype.trueLength = function()
{
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"omkar".trueLength()
"iceTea".trueLength()