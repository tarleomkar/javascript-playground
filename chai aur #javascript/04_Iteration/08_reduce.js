// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(`Toal is:  ${myTotal}`);



const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "AIDS course",
        price: 11999
    },
]

// With Arrow Function
// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// With Normal Function
const priceToPay = shoppingCart.reduce(function printMe(acc, item) {
    return acc + item.price;
}, 0);

console.log(priceToPay);

