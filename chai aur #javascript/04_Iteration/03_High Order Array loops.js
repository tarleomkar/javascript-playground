// High Order Array loops
// 1. for of
// To iterate over the elements of an array in JavaScript, it's recommended to use the for...of 

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr)
{
    // console.log(num)
}
// 1
// 2
// 3
// 4
// 5

const greetings = "Hello World!"
for (const greet of greetings)
{
    if(greet === ' ')
    {
        continue;
    }
    else
    {
    // console.log(`Each char is ${greet}`);
    }
}
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is W
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !

const map = new Map()
map.set("IN", "India")
map.set("USA", "United states of America")
map.set("FR", "France")
map.set("UK", "United Kingdoms")

console.log(map);

for (const [key, Value] of map)
{
    console.log(key, ':-', Value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject)
{
    console.log(key, ':-', Value);
}
// myObject is not iterable