// A callback is a function passed as an argument to another function.
// In JavaScript, a callback is a function that is passed as an argument to another function, and it gets executed sometime later. Imagine you're ordering food from a restaurant. You place your order (call the function), and you're told to wait (callback) until youir food is ready. When your food is ready, the restaurant calls you back to pick it up.

function getData(dataId, getNextData) {
    // 2s
    setTimeout(() => {
        console.log("data",  dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// callback hell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});

// *Note: This example is also example of callback hell