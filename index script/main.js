let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

document.querySelector('footer','p').textContent = `${year} | Papa Yaw Agyeman-Manu| Accra`;

let currentdate = document.lastModified;
// document.querySelector('span').textContent = currentdate;
console.log(currentdate);