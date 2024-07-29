// for...in loop is used to iterate over the properties of an (object)
const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject)
{
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// 2 you need to use only for-of loop for ascceing this
const programming = ["js", "rb", "py", "java", "cpp"];

for (const gandu of programming)
{
    console.log(gandu);
}
// js
// rb
// py
// java
// cpp