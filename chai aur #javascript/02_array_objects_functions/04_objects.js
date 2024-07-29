// singelton object
// const tinderUser = new Object()

// non singleton object
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false

// console.log(tinderUser);  //{}

const regularUser = {
    email: "tarleomkar8@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Omkar",
            lastName: "Tarle"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName.userfullname.  firstName); // Omkar

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)const obj1 = {1: "a", 2: "b"}

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
    {
        id: 1,
        email: "dsads@gmail.com"
    },
    {
        id: 2,
        email: "fsfa@gmail.com"
    },
    {
        id: 3,
        email: "asdsdas@gmail.com"
    }
]

users[1].email
// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

