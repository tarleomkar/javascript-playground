// script2.js

const randomColor = function() {
    const hex = "0123456789ABCDEF"; // Corrected typo: changed "E" to "F"
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId; // Declare intervalId outside functions to access it globally

const startChangingColor = function() {
    if(!intervalId)
    {
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function() {
    clearInterval(intervalId); 
    intervalId = null // De-referenced value (to free the values)
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
