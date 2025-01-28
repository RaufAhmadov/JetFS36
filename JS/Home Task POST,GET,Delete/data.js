"use strict"

const connect = "http://localhost:3000/";
const getUserList = document.querySelector("#user_list");
const getCountryFilter = document.querySelector("#countryFilter");
const form = document.querySelector("#form")
const getSearch = document.querySelector("#search")
const nameInp = document.querySelector("#nameInp")
const surnameInp = document.querySelector("#surnameInp")
const emailInp = document.querySelector("#emailInp")
const numberInp = document.querySelector("#numberInp")
const addressInp = document.querySelector("#addressInp")
const websiteInp = document.querySelector("#websiteInp")
const country = document.querySelector("#country")



// SHOW USERS

const showUsers = (arr) => {
    getUserList.innerHTML = "";
    if (arr.length > 0) {
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
                <button class="edit_btn" onclick="editUser('${id}')">Edit</button>
                <button class="del_btn" onclick="deleteUser('${id}')">Delete</button>
                <button class="det_btn" onclick="location.href='./detail.html?user=${id}'">Detail</button>
                </td>
                <!-- <td><img src="${img}" alt="User Image" style="width: 50px; height: 50px;"></td> -->
            </tr>`;
        });
    }
    else{getUserList.innerHTML = `NO DATA`}
};
// show elemek lazim deyil butun melumatlar JSON dan gelir
// showUsers(usersList);



// SHOW COUNTRY FILTER

const showCountryFilter = (arr) => {
    getCountryFilter.innerHTML = "";
    arr.forEach((countryObj) => {
        const country = countryObj.name;
        getCountryFilter.innerHTML += `
            <option value="${country.toLowerCase()}">${country}</option>
        `;
    });
};
// showCountryFilter(countryCategory);



// DELETE FUNCTION

const deleteUser = (id) =>{
    const isAgree = confirm("Are You Sure ?");
    if (isAgree) {
        axios.delete(connect + "usersList/" + id).then(res => {
            if (res.status === 200) {
                getUsers();
            }
        })
    }
};

const getUsers = () => {

    axios.get(connect + "usersList").then((res) => {
        if (res.status === 200) {
            showUsers(res.data);
        }
    });

}
getUsers();


axios.get(connect + "countryCategory").then((e) => {
    if (e.status === 200) {
        showCountryFilter(e.data);
    }
});

axios.get(connect + "countryCategory").then((e) => {
    if (e.status === 200) {
        e.data.forEach(countrys => {
            country.innerHTML += `
                <option>${countrys.name}</option>
            `;
        });
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const obj ={
        name: nameInp.value ,
        surname: surnameInp.value ,
        email: emailInp.value ,
        country: country.value ,
        address: addressInp.value ,
        contact: numberInp.value ,
        website: websiteInp.value 
    }
    axios.post(connect + "usersList", obj ).then((res) => {
        if (res.status === 201 && res.statusText === 'Created') {
            getUsers();
            alert("Registered successfully.");
        }
    });
});


// EDIT FUNCTION

window.editUser = (id) => {
    axios.get(connect + "usersList/" + id).then((res) => {
        if (res.status === 200) {
            const newName = prompt("Change your name: ", res.data.name);
            if (newName && newName.trim() !== "") {
                axios.patch(connect + "usersList/" + id, { name: newName }).then((updateRes) => {
                    if (updateRes.status === 200) {
                        alert("Name updated successfully!");
                        getUsers();
                    }
                });
            }
        }
    });
};


// CATEGORY FILTER





// SEARCH

getSearch.oninput = () => {
    const searchValue = getSearch.value.toLowerCase().trim();

    axios.get(connect + "usersList")
        .then((res) => {
            if (res.status === 200) {
                const filteredUsers = res.data.filter((user) => {
                    return (
                        (user.name.toLowerCase().includes(searchValue) || "") ||
                        (user.surname.toLowerCase().includes(searchValue) || "") ||
                        (user.email.toLowerCase().includes(searchValue) || "") ||
                        (user.country.toLowerCase().includes(searchValue) || "") ||
                        (user.address.toLowerCase().includes(searchValue) || "") ||
                        (user.contact.toLowerCase().includes(searchValue) || "") ||
                        (user.website.toLowerCase().includes(searchValue) || "")
                    );
                });

                showUsers(filteredUsers);
            }
        })
};


