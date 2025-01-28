"use strict"

const getUserList = document.querySelector("#user_list");
const getCountryFilter = document.querySelector("#countryFilter");
const connect = "http://localhost:3000/";



// SHOW USERS

const showUsers = (arr) => {
    getUserList.innerHTML = "";
    arr.forEach(({id , name , surname , email , country, address, contact, website, img}) => {
        getUserList.innerHTML += `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${surname}</td>
            <td>${email}</td>
            <td>${country}</td>
            <td>${address}</td>
            <td>${contact}</td>
            <td>${website}</td>
            <td>
            <button class="edit_btn">Edit</button>
            <button class="del_btn">Delete</button>
            <button class="det_btn" onclick="location.href='./detail.html?user=${id}'">Detail</button>
            </td>
            <!-- <td><img src="${img}" alt="User Image" style="width: 50px; height: 50px;"></td> -->
        </tr>`;
    });
};
// show elemek lazim deyil butun melumatlar JSON dan gelir
// showUsers(usersList);



// SHOW COUNTRY FILTER

const showCountryFilter = (arr) => {
    getCountryFilter.innerHTML = "";
    arr.forEach((country) => {
        getCountryFilter.innerHTML += `
            <option value="${country.toLowerCase()}">${country}</option>
        `;
    });
};
// showCountryFilter(countryCategory);


axios.get(connect + "usersList").then((res) => {
    if (res.status === 200) {
        showUsers(res.data);
    }
});

axios.get(connect + "countryCategory").then((e) => {
    if (e.status === 200) {
        showCountryFilter(e.data);
    }
});