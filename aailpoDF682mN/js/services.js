import {checkScroll} from "./scroll.js";


const titles = document.querySelectorAll(".title");
const boxes = document.querySelectorAll(".info-container");

function checkEffect() {
    titles.forEach(elem => {
        if(!checkScroll(elem, 50)){
            elem.style.scale = 0.8;// transform = "translateX(-80%)"; 
            return;
        }    
        elem.style.scale = 1;// elem.style.transform = "translateX(0%)";
    });

    // boxes.forEach(elem => {
    //     if(!checkScroll(elem, -130)){
    //         elem.style.opacity = 0; 
    //         return;
    //     }    
    //     elem.style.opacity = 1;
    // });
}

window.addEventListener("scroll", ()=>{
    checkEffect();
});