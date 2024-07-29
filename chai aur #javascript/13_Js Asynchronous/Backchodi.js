/*
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("Three");
}, 2000);

console.log("four");
console.log("five");
*/

// Callbacks
function calculator(a, b, sumcallback)
{
    sumcallback(a, b)
}

function sum(a, b)
{
    console.log(a + b);
}

calculator(1, 2) ((a, back) => {
    console.log(a + b);
})

// way 2nd
function doSomething(callback) {
    console.log("Doing something...");
    // Imagine this takes some time
    callback();
  }
  
  function afterDoingSomething() {
    console.log("I'm done!");
  }
  
  doSomething(afterDoingSomething);

// callback HEll

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        getNextData();
    }, 2000);
}

