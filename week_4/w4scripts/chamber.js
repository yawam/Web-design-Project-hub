"use strict"
function toggleMenu(){
    document.querySelector("#primarynav").classList.toggle("open");
    document.querySelector("#hamgurgerbtn").classList.toggle("open");
}

const x = document.querySelector("#hamgurgerbtn");
x.onclick = toggleMenu
