"use strict"

const getFirstNum = document.querySelector("#firstNum");
const getMath = document.querySelector("#math");
const getSecondNum = document.querySelector("#secondNum");
const getSubmit = document.querySelector("#submit");
const getResult = document.querySelector("#result");

let action = () => {

    let firstNum = parseFloat(getFirstNum.value);
    let math = getMath.value;
    let secondNum = parseFloat(getSecondNum.value);
    let result = 0;

    if (math === "+") {result = firstNum + secondNum;} 
    else if (math === "-") {result = firstNum - secondNum;} 
    else if (math === "*") {result = firstNum * secondNum;} 
    else if (math === "/") {
        if (secondNum !== 0) {result = firstNum / secondNum;
        } 
        else {result = "Warrning: / 0 ";}
    } 
    else {result = "Error";}
 getResult.textContent = "Result: " + result;
}

if (getSubmit) {
    getSubmit.addEventListener("click", function(event) {
        event.preventDefault();
        action();
    });
}


