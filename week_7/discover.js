// lazy loading
const images = document.querySelectorAll("[data-src]");
const option = {threshold: 1, rootMargin: "0px 0px 300px 0px"};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }

    img.src = source;
}

const io = new IntersectionObserver(
    (entries, io) => {

        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        })

    }, option
);

images.forEach(image => {
    io.observe(image);
})


// last visited
// local storage

localStorage.setItem('msg1', 'Hello Permanant');
sessionStorage.setItem("msg2", "Hello Temporary");

console.log(localStorage.getItem('msg1'));

let visit_heading = document.querySelector('.visited');

let now_date = new Date();

console.log(now_date);



let old_date = localStorage.getItem('date');

let o_date =  new Date(old_date);

let diff_time = now_date.getTime() - o_date.getTime();

let diff_sec = diff_time/1000; //milliseconds to seconds

let diff_min = diff_time/(1000 * 60);

let diff_hours = diff_time/(1000 * 60 * 60);

let diff_days = Math.round(diff_time/(1000* 60 * 60 * 24));

console.log(diff_days);



let stored_date = localStorage.getItem('date');

if(!stored_date) {
    visit_heading.textContent = "Welcome"
} else{
    visit_heading.textContent = diff_days + ' days since you last visited';

}

localStorage.setItem('date', now_date);