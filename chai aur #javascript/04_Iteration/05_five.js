const coding = ["js", "rb", "py", "java", "cpp"];

// coding.forEach(function (item) {
//     console.log(item);
// })
// js
// rb
// py
// java
// cpp

// 2 using arrow functions
// coding.forEach((item) => {
//     console.log(item);
// })


// 3
// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach(printMe);
// js
// rb
// py
// java
// cpp

// 4
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })
// js 0 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// rb 1 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// py 2 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// java 3 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// cpp 4 [ 'js', 'rb', 'py', 'java', 'cpp' 

// 5
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

// myCoding.forEach(function (items) 
// {
//     console.log(items);
// })

// using arrowFunction
myCoding.forEach((items) => {
    // console.log(items);
    // 1. asscessing objects
    // console.log(items.languageName);
    console.log(items.languageFileName)
})
// { languageName: 'javascript', languageFileName: 'js' }
// { languageName: 'java', languageFileName: 'java' }
// { languageName: 'python', languageFileName: 'py' }