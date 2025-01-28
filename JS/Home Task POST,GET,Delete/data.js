"use strict"

const getUserList = document.querySelector("#user_list");
const getCountryFilter = document.querySelector("#countryFilter");


// USERS AND CATEGOTY LISTS
const countryCategory = ["All", "Azerbaijan", "Russian", "USA"]
const usersList = [
    {
        "id": "",
        "name": "Leanne",
        "surname": "Bret",
        "email": "Sincere@april.biz",
        "country": "Azerbaijan" ,
        "address": "Light str 123" ,
        "contact": "1-770-736-8031",
        "website": "hildegard.org",
    },
    {
        "id": "",
        "name": "Ervin",
        "surname": "Howell",
        "email": "Shanna@melissa.tv",
        "country": "Azerbaijan" ,
        "address": "Light str 123" ,
        "contact": "1-770-736-8031",
        "website": "hildegard.org",
    },
    {
        "id": "",
        "name": "Clementine",
        "surname": "Bauch",
        "email": "Nathan@yesenia.net",
        "country": "Azerbaijan" ,
        "address": "Light str 123" ,
        "contact": "1-770-736-8031",
        "website": "hildegard.org",
    },
    {
        "id": "",
        "name": "Patricia",
        "surname": "Lebsack",
        "email": "Julianne.OConner@kory.org",
        "country": "Azerbaijan" ,
        "address": "Light str 123" ,
        "contact": "1-770-736-8031",
        "website": "hildegard.org",
    },
    {
        "id": "",
        "name": "Chelsey",
        "surname": "Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "country": "Azerbaijan" ,
        "address": "Light str 123" ,
        "contact": "1-770-736-8031",
        "website": "hildegard.org",
    },
];

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
            </td>
            <!-- <td><img src="${img}" alt="User Image" style="width: 50px; height: 50px;"></td> -->
        </tr>`;
    });
};
showUsers(usersList);

// SHOW COUNTRY FILTER
const showCountryFilter = (arr) => {
    getCountryFilter.innerHTML = "";
    arr.forEach((country) => {
        getCountryFilter.innerHTML += `
            <option value="${country.toLowerCase()}">${country}</option>
        `;
    });
};
showCountryFilter(countryCategory);