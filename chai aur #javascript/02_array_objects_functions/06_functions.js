function sayMyName()
{
    console.log("O");
    console.log("M");
    console.log("K");
    console.log("A");
    console.log("R");
}

// sayMyName();

// function addTwoNumbers(number1, number2) // parameters number1, number2
// {
//     console.log(number1 + number2);
// }
// console.log(addTwoNumbers(3, 5)) // arguments = 3, 5

function addTwoNumbers(number1, number2) // parameters number1, number2
{
    // let result = (number1 + number2);
    // return result
    return number1 + number2;
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result); // Result:  8

function loginUserMessage(userName = "Omkar") {
    if(!userName)
    {
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}

// console.log((loginUserMessage())) // Omkar just logged in

function calculatePrice(val1, val2, ...num1) // rest/spread operator
{
    return num1
}

// console.log(calculatePrice(200, 400, 500, 2000)); // [ 200, 400, 500 ] 

const user = {
    userName: "Omkar",
    price: 199
}

function handleObject(anyObject) 
{
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user) // Username is Omkar and price is 199
handleObject({
    userName: "Omkar",
    price: 799
})
// Username is Omkar and price is 799

const myNewArray = [200, 400, 100, 600];

function returnMySecondValue(getArray)
{
    return getArray[1];
}

console.log(returnMySecondValue(myNewArray)); // 400
console.log(returnMySecondValue([200, 400, 500, 1000])); // 400

