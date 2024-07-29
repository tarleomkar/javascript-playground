// Object de-structure and JSON API introx
// Object destructuring
const course = {
    name: "Js in hindi",
    price: 999,
    courseInstructor: "Hitesh Sir"
}

// course.courseInstructor

// const {courseInstructor} = course
// you can change the key name also with below syntax
// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor); // Hitesh Sir
// console.log(instructor); // Hitesh Sir

// **************** Also a destructring objects in React *********
/*
const navBar = ({company}) => {

}
navBar(company = "hitesh") */

// In form of JSON also
// {
//     "name": "Omkar",
//     "courseName": "Js in Nsk",
//     "price": 999
// }

// In form of arrays also
[
    {},
    {},
    {}
]