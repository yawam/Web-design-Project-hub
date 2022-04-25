let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

document.querySelector('#foot').textContent = `${year} | Papa Yaw Agyeman-Manu| Accra`;

let currentdate = document.lastModified;
document.querySelector('#lastmod').textContent = currentdate;
console.log(currentdate);