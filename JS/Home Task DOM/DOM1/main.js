"use strict"


// TASK 1 BOX COLOR CHANGER

const get_header = document.querySelector("#cube");
const get_red = document.querySelector("#red_btn");
const get_green = document.querySelector("#green_btn");
const get_blue = document.querySelector("#blue_btn");

function changer(color) {
    cube.setAttribute("class", color);
}

get_red.onclick = function(){changer("red")} 
get_green.onclick = function(){changer("green")} 
get_blue.onclick = function(){changer("blue")} 


// TASK 2 LAMP ON / OFF

// METHOD 1

let switchOff = true;
let lampOff = true;

switch_btn.onclick = function(){
    if (switchOff && lampOff) {
        switchOff = false;
        light.setAttribute("src", "/JS/Home Task DOM/DOM1/img/light-on.png");
        lampOff = false;
        switch_btn.setAttribute("src", "/JS/Home Task DOM/DOM1/img/button-off.png")
    }
    else{
        switchOff = true;
        light.setAttribute("src", "/JS/Home Task DOM/DOM1/img/light-off.png");
        lampOff = true;
        switch_btn.setAttribute("src", "/JS/Home Task DOM/DOM1/img/button-on.png")
    }

    
};

// METHOD 2

// switch_btn.onclick = function(){
//     const isLampOff = light.getAttribute("src").includes("light-off.png");

//     light.setAttribute("src", isLampOff ? "/JS/Home Task DOM/DOM1/img/light-on.png" : "/JS/Home Task DOM/DOM1/img/light-off.png");
//     switch_btn.setAttribute("src", isLampOff ? "/JS/Home Task DOM/DOM1/img/button-off.png" : "/JS/Home Task DOM/DOM1/img/button-on.png");
// }


// TASK 3 OBJECT

const arr = [
    { id: 0, name: 'Phone', price: '100 AZN' },
    { id: 2, name: 'Computer', price: '200 AZN' }
];

const productList = document.querySelector(".product_list");

arr.forEach(
    function(product){
        productList.innerHTML += `${product.name} : ${product.price} <br>`;
    }
);

