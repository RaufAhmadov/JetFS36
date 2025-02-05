"use strict"


const getDiv = document.querySelector(".div");
const getBtn = document.querySelector("#btn");
const getTime = document.querySelector("#timeZone");



const timeZone = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const fullTime = hour + ':' + minute + ':' + second; 
    return fullTime;
};

setInterval(() => {
    getTime.innerHTML = timeZone();
}, 1000); 

getTime.innerHTML = timeZone();


// METHOD 1

// getBtn.addEventListener("click" , ()=> {
//     let second = 6;
//     const interval = setInterval(() => {
//         if (second > 0) {
//             second--;
//             getDiv.innerHTML = `<p class="out"> The final countdown has begun! : ${second} </p>`;
//         }
        
//         if (second === 0) {
//             getDiv.innerHTML = `<p class="out">Time is up: ${second} </p>`;
//             clearInterval(interval);
    
//         }
//     }, 1000);
// });


// METHOD 2

let starter = true;

getBtn.addEventListener("click", () => {
    if (starter) {
        getDiv.innerHTML = `<p class="out"> You are testing setTimeout, please wait a moment! </p>`;
        starter = false;
        setTimeout(() => {
            getDiv.innerHTML = `<p class="out">Thank you for waiting! The function is now working perfectly.</p>`;
        }, 5000);
    }
});
