const requestURL = "https://yawam.github.io/WDD-230/week_9/scripts/data.json";

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
    let website = document.createElement("a");

    image.setAttribute("src", object.image);
    image.setAttribute("alt", "Company Logo");
    image.setAttribute("class", "directimg");
    card.setAttribute("class", "directsection");
    name.textContent = `${object.name}`;
    address.textContent = `${object.address}`;
    phone.textContent = `${object.phone}`;
    website.textContent = `${object.Website}`;
    website.setAttribute("href", object.Website);

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    document.querySelector("#maindiv").appendChild(card);


};