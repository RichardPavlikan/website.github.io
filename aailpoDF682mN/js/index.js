import {checkScroll} from "./scroll.js";

const rentingHeaderOverlay = document.querySelector(".renting .header-overlay");
const servicesContainer = document.querySelectorAll(".services-container");
const cards = document.querySelectorAll(".card");
const sectionHeader = document.querySelectorAll(".section-header");



function aboutEffect(){
    if(!checkScroll(rentingHeaderOverlay)){
        rentingHeaderOverlay.style.opacity= 0; 
        return;
    }    
    rentingHeaderOverlay.style.opacity = 1;
}

function servicesContainerEffect(){
    servicesContainer.forEach(elem => {
        if(!checkScroll(elem, -75)){
            elem.style.transform = "translateY(10%)"; 
            return;
        }    
        elem.style.transform = "translateY(-10%)";
    });
}

function cardsEffect(){
    cards.forEach(elem => {
        if(!checkScroll(elem, -150)){
            elem.style.opacity = 0; 
            return;
        }    
        elem.style.opacity = 1;
    });

    sectionHeader.forEach(elem => {
        if(!checkScroll(elem)){
            elem.style.transform = "translateX(-80%)";
            return;
        }    
        elem.style.transform = "translateX(0%)";
    });

    
}

window.addEventListener("scroll", ()=>{
    aboutEffect();
    servicesContainerEffect();  
    cardsEffect();
});