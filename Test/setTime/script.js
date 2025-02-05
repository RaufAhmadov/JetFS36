"use strict"


const getDiv = document.querySelector(".div");


let second = 5;

const interval = setInterval(() => {
    if (second > 0) {
        second--;
        getDiv.innerHTML = second;
    }
    
    if (second === 0) {
        getDiv.innerHTML = `Time is out: ${second}`;
        clearInterval(interval);

    }
}, 1000);