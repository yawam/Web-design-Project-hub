"use strict"

const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(date.toLocaleDateString('en-us', options));
document.querySelector("#date").textContent = date.toLocaleDateString('en-us', options);

const year = date.getFullYear();
document.querySelector('#year').textContent = year;
console.log(year);

let currentdate = document.lastModified;
document.querySelector('#lastmod').textContent = currentdate;
console.log(currentdate);

// creating toggle function
function toggleMenu(){
    document.querySelector("#primarynav").classList.toggle("open");
    document.querySelector("#hamgurgerbtn").classList.toggle("open");
}

const x = document.querySelector("#hamgurgerbtn");
x.onclick = toggleMenu
