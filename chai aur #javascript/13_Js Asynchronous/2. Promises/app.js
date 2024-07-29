// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("Success");
//     reject("some error occurred");
// })

// example
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     })
// }

// 2. Using Promise.then()
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("Success");
        // reject("network error");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fullfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});