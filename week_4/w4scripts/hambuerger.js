let button1 = document.querySelector('.btn');

function show(){
    // button1.classList.add('newstyle');
    button1.classList.toggle('newstyle');
}

button1.addEventListener('click', show);

let hambutton = document.querySelector('.ham');
let mainnav = document.querySelector('nav');
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
});