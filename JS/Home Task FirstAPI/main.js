"use strict"

// READYSTATE -in etaplari var 
// 0 UNSET Объект был создан, но метод .open() ещё не был вызван.
// 1 OPENED Метод .open() был вызван, но запрос еще не отправлен (.send() ещё не вызывали).
// 2 HEADERS_RECEIVED Запрос был отправлен, сервер принял его, и заголовки ответа получены.
// 3 LOADING Идёт загрузка данных; частичный ответ уже доступен.
// 4 DONE Запрос полностью завершён, данные получены (успешно или с ошибкой).

// TASK 1

// const endpoint = "https://dummyjson.com/products";
// const userContainer = document.querySelector("#list");

// const xhr = new XMLHttpRequest();
// xhr.open("GET", endpoint);
// xhr.send();

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const response = JSON.parse(xhr.response);
//         response.products.forEach(product => {
//             userContainer.innerHTML += `
//                 <div class="store">
//                     <p>ID: ${product.id}</p>
//                     <p>Status: ${product.stock > 0 ? "Available" : "Out of Stock"}</p>
//                     <p>Brand: ${product.brand}</p>
//                     <p>Title: ${product.title}</p>
//                     <p>Discount: ${product.discountPercentage}%</p>
//                     <p>Price: $${product.price}</p>
//                     <img src="${product.images[0]}" alt="${product.title}" style="width:150px; height:auto;">
//                 </div>
//             `;
//         });
//     }
// };


// TASK 2


// const connect = "https://jsonplaceholder.typicode.com/users";
// const getUser = document.querySelector("#list");

// let xhr = new XMLHttpRequest();
// xhr.open("GET", connect);
// xhr.send();

// xhr.onreadystatechange = () =>{
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const response = JSON.parse(xhr.response)
//         response.forEach(element => {
//             getUser.innerHTML += `
//                 <div class="store">
//                     <p>ID: ${element.id}</p>
//                     <p>Name: ${element.name}</p>
//                     <p>Username: ${element.username}</p>
//                     <p>E-mail: ${element.email}</p>
//                     <ul>Address:
//                         <li>Street: $${element.address.street}</li>
//                         <li>Suite: ${element.address.suite}</li>
//                         <li>City: ${element.address.city}</li>
//                         <li>Zipcode: ${element.address.zipcode}</li>
//                         <li> 
//                             <ul>Geo:
//                                 <li>Lat: ${element.address.geo.lat}</li>
//                                 <li>lng: ${element.address.geo.lng}</li>
//                             </ul>
//                         </li>
//                     <ul>
//                 </div>          
//             `;
//         });
//     }
// };


// TASK 3

// const connect = "https://jsonplaceholder.typicode.com/posts";
// const getList = document.querySelector("#list");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click" , () => {
    
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", connect);
//     xhr.send();

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             const a = JSON.parse(xhr.response);
//             a.forEach(event => {
//                 getList.innerHTML += `
//                     <div class="info">
//                         <p>UserID : ${event.userId}</p>
//                         <p>ID : ${event.id}</p>
//                         <p>Title : ${event.title}</p>
//                         <p>Body : ${event.body}</p>
//                     </div>
//                 `
//             });
//         }
//     }
// });

