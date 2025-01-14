"use strict";


const getName = document.querySelector("#name");
const getSurname = document.querySelector("#surname");
const getEmail = document.querySelector("#email");
const getNumber = document.querySelector("#number");
const getCity = document.querySelector("#city");
const addBtn = document.querySelector("#submit");
const getResult = document.querySelector("#result");

let action = () => {
    const userData = {
        name: getName.value,
        surname: getSurname.value,
        email: getEmail.value,
        number: parseInt(getNumber.value),
        city: getCity.value
    };
    let result = `Yeni seçici: <br> Ad / Soyad : ${userData.name} ${userData.surname} <br> Mail : ${userData.email} <br> Əlaqə : ${userData.number} <br> Şəhər : ${userData.city}`
    getResult.innerHTML = result;
}

addBtn.onclick = function(event) {
    event.preventDefault();
    action();  
};