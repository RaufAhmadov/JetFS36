"use strict"

const mobileMenu = document.querySelector("#mobileMenu");
const bars = document.querySelector("#bars");

let openMobileMenu = false;

const showHideMenu = function(){
    if(openMobileMenu){
        bars.classList.add("fa-x");
        mobileMenu.classList.remove("hide");
    }
    else{mobileMenu.classList.add("hide"); bars.classList.remove("fa-x");}
}

showHideMenu();

bars.onclick = function(){
    openMobileMenu = !openMobileMenu;
    showHideMenu();
}

