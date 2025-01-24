"use strict";

const getIndexPageMain = document.querySelector("#main");
const connect = "https://dummyjson.com/products";

axios.get(connect).then(response => {
    console.log(response);
    if (response.status === 200) {
        response.data.products.forEach(({
            availabilityStatus, brand, category, description, dimensions, discountPercentage, id , images, 
            minimumOrderQuantity, price, rating,  returnPolicy, review, shippingInformation, sku, stock, 
            tags, title, warantyInformation, weight
        }) => {
            getIndexPageMain.innerHTML +=`
            <div class="main_list">
                <div class="goods_img">
                    <img src="${images[0]}" alt="${title}">
                </div>
                <div class="goods_info">
                    ${brand ? `<p class="goods_brand">${brand}</p>` : ""}
                    <p class="goods_cat">Category: ${category}</p>
                    <p class="goods_disc">Discount: ${discountPercentage}%</p>
                    <p class="goods_rating">Rating: ${rating}</p>
                </div>
            </div>
            `;
        });
        const onklik = () =>{
            document.querySelectorAll(".main_list").forEach(element => {
                element.addEventListener("click", () => {
                    console.log("ok"); 
                    // IKINCI SEHFEYE KECID BURADA
                });
            });
        };
        onklik();
    }
});






















// const getMain = document.querySelector("#main");

// const connect = "https://fakestoreapi.com/products";
// axios.get(connect).then(response => { 
//     if (response.status === 200) {
//         response.data.forEach(element => {
//             getMain.innerHTML += `
//             <div class="list">
//                 <div class="api_img">
//                     <img src="${element.image}" alt="${element.title}">
//                 </div>
//                 <div class="api_cat_info">
//                     <a class="api_id">ID: ${element.id}</a>
//                     <a href="./category.html?category=${element.category}" class="api_category">Category: ${element.category}</a>
//                 </div>
//             </div>
//             `;
//         });
//     }
// });




// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"