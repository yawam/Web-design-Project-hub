const requestURL = "https://github.com/yawam/WDD-230/blob/master/Temple%20Inn%20and%20Suites/Temple/temple.json";

async function getComps(URL){
    const response = await fetch(URL);
    if(response.ok){
        const jsonObject = await response.json();
        const company = jsonObject["Temples"];
        company.forEach(displayTemps);
        // company.forEach(displayList);


    }
};

getComps(requestURL);

function displayTemps(object){
    let card = document.createElement("section");
    let image = document.createElement("img");
    let name = document.createElement("p");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let schedule = document.createElement("p");

    image.setAttribute("src", object.image);
    image.setAttribute("alt", "temple-image");
    image.setAttribute("class", "tempimg");
    card.setAttribute("class", "card");
    name.textContent = `${object.name}`;
    address.textContent = `${object.address}`;
    phone.textContent = `${object.phone}`;
    email.textContent = `${object.email}`;
    website.setAttribute("href", object.Website);
    schedule.textContent = `${object.schedule}`;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(schedule);

    document.querySelector("#maindiv").appendChild(card);


};