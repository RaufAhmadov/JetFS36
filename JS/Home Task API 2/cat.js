"use strict";

const urlParams = new URLSearchParams(window.location.search);
const itemID = urlParams.get("item");  // Получаем item ID из URL

const mainInfo = document.querySelector("#moreInfo");
const catMain = document.querySelector("#cat_main");
mainInfo.innerHTML = `Item ID: ${itemID} Detail info`;

const connect = "https://dummyjson.com/products";

axios.get(connect).then(response => {
    if (response.status === 200) {
        const product = response.data.products.find(product => product.id === parseInt(itemID));  // Фильтруем по ID товара
        if (product) {
            const {
                availabilityStatus, brand, category, description, dimensions, discountPercentage, id, images, 
                minimumOrderQuantity, price, rating, returnPolicy, review, shippingInformation, sku, stock, 
                tags, title, warrantyInformation, weight
            } = product;

            catMain.innerHTML = `
                <div class="about_category">
                    <div class="category_img"><img src="${images[0]}" titles="${title}"></div>
                </div>
                <div class="category_info">
                    <p>Title: ${title}</p>
                    <p>Brand: ${brand}</p>
                    <p>Category: ${category}</p>
                    <p>Price: $${price}</p>
                    <p>Discount: ${discountPercentage}%</p>
                    <p>Rating: ${rating}</p>
                    <p>Availability: ${availabilityStatus}</p>
                    <p>Min Order: ${minimumOrderQuantity}</p>
                    <ul>Dimensions:
                    <li>Depth: ${dimensions.depth}</li>
                    <li>Height: ${dimensions.height}</li>
                    <li>Width: ${dimensions.width}</li>
                    </ul>
                    <p>${returnPolicy}</p>
                    <p>Tags: ${tags}</p>
                    <p>${shippingInformation}</p>
                    <p>SKU: ${sku}</p>
                    <p>Stock: ${stock}</p>
                    <p>${warrantyInformation}</p>
                    <p>Weight: ${weight}</p>
                    <p>Description: ${description}</p>
                </div>
            `;
        }
    }
});

