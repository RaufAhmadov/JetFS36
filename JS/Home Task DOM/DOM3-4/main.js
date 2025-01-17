"use strict";
const body = document.querySelector("body");
const modeChanger = document.querySelector("#darkMode");
const form = document.querySelector("#form");
const getName = document.querySelector("#name");
const getSurname = document.querySelector("#surname");
const getEmail = document.querySelector("#email");
const getNumber = document.querySelector("#number");
const getProfession = document.querySelector("#profession");
const getFile = document.querySelector("#file");
const getFileImg = document.querySelector("#preview");
const addBtn = document.querySelector("#submit");
const getResult = document.querySelector("#result");
const getTable = document.querySelector("#table");
const getTableBody = document.querySelector("#tableBody");
const getSearch = document.querySelector("#search");
const getSearchBtn = document.querySelector("#search_btn");
const getSearchResult = document.querySelector("#searchResult");

// MASSIV FOR USERS 
// const users = [];
// MASSIV FOR USERS (Retrieve from localStorage or initialize as empty array)
let users = JSON.parse(localStorage.getItem("users")) || [];

// DÜZGÜN VARİANT BUDUR FORM ƏLDƏ EDİLMƏLİDİR BÜTOV OLARAQ VE SONDA SIFIRLANMALIDIR

form.onsubmit = (event) => {
    event.preventDefault();

        const userData = {
        name: getName.value,
        surname: getSurname.value,
        email: getEmail.value,
        number: parseInt(getNumber.value),
        profession: getProfession.value,
        img: getFileImg.src
    };

    // SEND ALL CREDETIALS FROM userData TO MASSIV users AND UPDATE THE TABLE
    users.push(userData);
    updateTable();

    form.reset();
    getFileImg.src = "";
}


// IMG UPLOAD

getFile.onchange = () => {
    const file = getFile.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            getFileImg.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
};


// ADD USERS IN USER LIST

const updateTable = () => {
    getTableBody.innerHTML = "";
    users.forEach((user , index) => {
        getTableBody.innerHTML += 
        `<tr>
            <td>1</td>
            <td>${user.name}</td>
            <td>${user.surname}</td>
            <td>${user.email}</td>
            <td>${user.number}</td>
            <td>${user.profession}</td>
            <td><img src="${user.img}" alt="User Image" style="width: 50px; height: 50px;"></td>
        </tr>
        `;
    })

}

// DARK MODE

let modeSwitch = true;

modeChanger.onclick = function () {
    if (modeSwitch) {
        body.style.backgroundColor = "#000";
        body.style.color = "#fff"; // Меняем цвет текста на белый
        modeSwitch = false; // Переключаем режим
    } else {
        body.style.backgroundColor = "#fff"; // Устанавливаем белый фон
        body.style.color = "#000"; // Меняем цвет текста на черный
        modeSwitch = true; // Переключаем режим
    }
};


// BU VARİANT İŞƏ YARAYIR AMMA PEŞƏKAR METOD DEYİLDİR

// let action = () => {
//     const userData = {
//         name: getName.value,
//         surname: getSurname.value,
//         email: getEmail.value,
//         number: parseInt(getNumber.value),
//         profession: getProfession.value
//     };
//     let result = `New User added: <br> Name / Surname : ${userData.name} ${userData.surname} <br> E-mail : ${userData.email} <br> Contacts : ${userData.number} <br> Profession : ${userData.profession}`
//     getResult.innerHTML = result;

//     getName.value = "";
//     getSurname.value = "";
//     getEmail.value = "";
//     getNumber.value = "";
//     getProfession.value = "";
// }

// addBtn.onclick = function(event) {
//     event.preventDefault();
//     action();  
// };



// FILTER METODU https://ru.hexlet.io/qna/javascript/questions/kak-sdelat-filtry-js