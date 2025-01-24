"use strict";

// const urlParams = new URLSearchParams(window.location.search);
// const category = urlParams.get("category");

// const moreInfo = document.querySelector("#moreInfo");
// const catMain = document.querySelector("#cat_main");

// if (category) {
//     moreInfo.innerHTML = `Category: ${category}`;
// } else {
//     moreInfo.innerHTML = "Category not found";
// }

// const connect = "https://fakestoreapi.com/products";
// axios.get(connect).then(response => {
//     const filteredProducts = response.data.filter(item => item.category === category);

//     if (filteredProducts.length > 0) {
//         filteredProducts.forEach(product => {
//             catMain.innerHTML += `
//             <div class="goods_list">
//                 <div class="goods_img">
//                     <img src="${product.image}" alt="${product.title}">
//                 </div>
//                 <div class="goods_info">
//                     <p class="goods_title">Title: ${product.title}</p>
//                     <p class="goods_price">Price: $${product.price}</p>
//                     <ul>
//                         <li class="goods_rait">Rating: ${product.rating.rate}</li>
//                         <li class="goods_count">Count: ${product.rating.count}</li>
//                     </ul>
//                     <p class="goods_desc">Description: ${product.description}</p>
//                 </div>
//             </div>
//             `;
//         });
//     } else {
//         catMain.innerHTML = "<p>No products found in this category.</p>";
//     }
// }).catch(error => {
//     console.error("Error fetching data:", error);
//     catMain.innerHTML = "<p>Failed to load products.</p>";
// });