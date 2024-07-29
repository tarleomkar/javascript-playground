// for

// for (let i = 0; i <= 10; i++)
// {
    // const element = i;
    // if (element == 5)
    // {
        // console.log("5 is best number");
    // }
    // console.log(element);
// }

// console.log(element); // error
 
// Printing tables (1 to 10)
for (let i = 1; i <= 10; i++)
{
    console.log(`outer loop values: ${i}`);
    for (let j = 1; j <= 10; j++)
    {
        // console.log(`inner loop values ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i * j);
    }
}

// let myArray = ["flash", "batman", "superman"]

// for (let index = 0; index < myArray.length; index++)
// {
//     const element = myArray[index]
//     console.log(element);
// }

// Additional keywords
// 1. Break
// for (let index = 0; index <= 20; index++)
// {
//     if (index == 5)
//     {
//     console.log("Detected 5");
//     break;
//     }
//     console.log(`Value of i is ${index}`);
// }

// 2. Continue
for (let index = 0; index <= 20; index++)
{
    if (index == 5)
    {
    console.log("Detected 5");
    continue;
    }
    console.log(`Value of i is ${index}`);
}