"use strict";


// MASSIV FOR USERS 
// const users = [];
// MASSIV FOR USERS (Retrieve from localStorage or initialize as empty array)
// let users = JSON.parse(localStorage.getItem("users")) || [];

// DÜZGÜN VARİANT BUDUR FORM ƏLDƏ EDİLMƏLİDİR BÜTOV OLARAQ VE SONDA SIFIRLANMALIDIR

// form.onsubmit = (event) => {
//     event.preventDefault();

//         const userData = {
//         name: getName.value,
//         surname: getSurname.value,
//         email: getEmail.value,
//         number: parseInt(getNumber.value),
//         profession: getProfession.value,
//         img: getFileImg.src
//     };

//     // SEND ALL CREDETIALS FROM userData TO MASSIV users AND UPDATE THE TABLE
//     users.push(userData);
//     updateTable();

//     form.reset();
//     getFileImg.src = "";
// }


// IMG UPLOAD

// getFile.onchange = () => {
//     const file = getFile.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//             getFileImg.src = event.target.result;
//         };
//         reader.readAsDataURL(file);
//     }
// };


// ADD USERS IN USER LIST

// const updateTable = (filteredUsers = users) => {
//     getTableBody.innerHTML = "";
//     filteredUsers.forEach((user, index) => {
//         getTableBody.innerHTML += 
//         `<tr>
//             <td>${index + 1}</td>
//             <td>${user.name}</td>
//             <td>${user.surname}</td>
//             <td>${user.email}</td>
//             <td>${user.number}</td>
//             <td>${user.profession}</td>
//             <td><img src="${user.img}" alt="User Image" style="width: 50px; height: 50px;"></td>
//         </tr>`;
//     });
// };

// DARK MODE

// let modeSwitch = true;

// modeChanger.onclick = function () {
//     if (modeSwitch) {
//         body.style.backgroundColor = "#000";
//         body.style.color = "#fff"; 
//         modeSwitch = false; 
//     } else {
//         body.style.backgroundColor = "#fff";
//         body.style.color = "#000"; 
//         modeSwitch = true; 
//     }
// };


// SEARCH

// getSearch.oninput = () => {
//     const searchValue = getSearch.value.toLowerCase();
//     const filteredUsers = users.filter(user =>
//         user.name.toLowerCase().includes(searchValue) ||
//         user.surname.toLowerCase().includes(searchValue) ||
//         user.email.toLowerCase().includes(searchValue) ||
//         user.profession.toLowerCase().includes(searchValue)
//     );

//     updateTable(filteredUsers);
// };


// CATEGORY FILTER

// professionFilter.onchange = () => {
//     const selectedProfession = professionFilter.value;
//     const filteredUsers = users.filter(user => user.profession === selectedProfession);

//     updateTable(filteredUsers);
// };




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