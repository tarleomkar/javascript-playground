// async function hello()
// {
//     console.log(hello);
// }

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

// This is code which is easiest to undersatnd so async-await use mostly comaper to callbacks and promises
async function getAllData() {
    await api(1); // 1st
    console.log("getting data1...");
    await api(2); // 2nd
    console.log("getting data2...");
    await api(3); // 3rd
    console.log("getting data3...");
    await api(4); // 4th
    console.log("getting data4...");
    await api(5); // 5th
    console.log("getting data5...");
    await api(6); // 6th
    console.log("getting data6...");
}

// using IIFE function - Directly executing function without calling it
// IIFE function
// (async function () {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);
// })();

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}