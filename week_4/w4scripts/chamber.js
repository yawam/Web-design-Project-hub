"use strict"

const date = new Date();
const options = { weekday: 'long',day: 'numeric', month: 'long', year: 'numeric' };

showbanner();

function showbanner(){
        const weekday = date.getDay();
        if (weekday ==  1 || weekday == 2) {
            let banner = document.querySelector("#banner");
            banner.style.display = "block";
        };
    };

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











