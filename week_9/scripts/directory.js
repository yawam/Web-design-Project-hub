const requestURL = "https://yawam.github.io/WDD-230/week_9/scripts/data.json";

async function getComps(URL){
    const response = await fetch(URL);
    if(response.ok){
        const jsonObject =await response.json();
        const company = jsonObject["Companies"];
        company.forEach(displayComps);
        company.forEach(displayList);


    }
};

getComps(requestURL);

function displayComps(object){
    let card = document.createElement("section");
    let image = document.createElement("img");
    let name = document.createElement("p");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");

    image.setAttribute("src", object.image);
    image.setAttribute("alt", "Company Logo");
    image.setAttribute("class", "directimg");
    card.setAttribute("class", "directsection");
    name.textContent = `${object.name}`;
    address.textContent = `${object.address}`;
    phone.textContent = `${object.phone}`;
    website.textContent = `${object.Website}`;
    website.setAttribute("href", object.website);

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    document.querySelector("#maindiv").appendChild(card);


};


const table = document.createElement("table");
function displayList(object){
    // let table = document.createElement("table");
    let tablerow = document.createElement("tr")
    let tabledata = document.createElement("td")
    let name = document.createElement("td");
    let address = document.createElement("td");
    let phone = document.createElement("td");
    let website = document.createElement("a","td");

    document.querySelector("main").appendChild(table);
    table.setAttribute("class", "list")
    name.textContent = `${object.name}`;
    address.textContent = `${object.address}`;
    phone.textContent = `${object.phone}`;
    website.textContent = `${object.Website}`;
    website.setAttribute("href", object.website);

    table.appendChild(tablerow);
    tablerow.appendChild(tabledata);
    tablerow.appendChild(name);
    tablerow.appendChild(phone)
    tablerow.appendChild(address);
    tablerow.appendChild(website);
    
    
};


const gridbutton = document.querySelector("#gridbtn");
// gridbutton.onclick = toggleMenu
const listbutton = document.querySelector("#listbtn");
// listbutton.onclick = toggleMenu
const display = document.querySelector("main");
let maindiv = document.getElementById('maindiv');
let list = document.getElementById('list');


// function toggleMenu(){
//     document.querySelector("#gridbtn").classList.toggle("open");
//     document.querySelector("#listbtn").classList.toggle("open");
// }

gridbutton.addEventListener("click", () => {
    // display.classList.add("maindiv")
    // display.classList.remove("list")
    
    maindiv.style.display ='grid';
    table.style.display = 'none';

})

listbutton.addEventListener("click", showlist);

function showlist(){
    // display.classList.add("list")
    // display.classList.remove("#maindiv")
    console.log("working");
    // displayList();

    maindiv.style.display = 'none';
    table.style.display = 'block';
    


}


//     function displayTable(prophet){
//         let list_row = document.createElement('tr');
//         let td_name = document.createElement('td');
//         td_name.textContent = prophets.name + ' ' + prophet.lastname;
    
//         let td_birthdate = document.createElement('td');
//         td_birthdate.textContent = prophet.birthdate;
    
//         list_row.appendChild(td_name);
//         list_row.appendChild(td_birthdate);
//         document.querySelector('table').appendChild(list_row);
//     }
    
// };
