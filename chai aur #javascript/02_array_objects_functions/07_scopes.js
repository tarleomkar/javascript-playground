// var c = 300
let  a = 300

if (true)
{
    let a = 10
    // console.log("Inner:", a);
    const b = 20
    // console.log("Inner: ", b);
    var c = 30
}


// console.log(a);
// console.log(b);
// console.log(c); // 30

// nested scope

function one()
{
    const userName = "Omkar"

    function two()
    {
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);

    two()
}

one()

if(true)
{
    const userName = "Omkar"
    if(userName === "Omkar")
    {
        const website = "Youtube"
        console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

// ******** intresting *******

function addOne(num)
{
    return num + 1;
}

console.log(addOne(5)) // 6

addTwo(5)
const addTwo = function(num)
{
    return num + 2
}
// Cannot access 'addTwo' before initialization

