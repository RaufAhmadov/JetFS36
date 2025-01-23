"use strict"

const getMain = document.querySelector("#main");

const connect = "https://fakestoreapi.com/products";
axios.get(connect).then(response => { 
    response.data.forEach(element => {
        getMain.innerHTML +=`
        <div class="list">
            <div class="api_img">
                <img src="${element.image}" alt="${element.title}"">
            </div>
            <div class="api_cat_info">
                <a class="api_id">ID : ${element.id}</a>
                <a class="api_category">Category: ${element.category}</a>
            </div>
        </div>
        
        `;
    });
});

// const open = () => {
//     list.addEventListener("click", () => {
        
//     });
// };

// open();




// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"