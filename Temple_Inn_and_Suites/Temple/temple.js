const requestURL = "https://yawam.github.io/WDD-230/Temple_Inn_and_Suites/Temple/temple.json";

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
    let emoji = document.createElement("img");

    image.setAttribute("src", object.image);
    image.setAttribute("alt", "temple-image");
    image.setAttribute("class", "tempimg");
    card.setAttribute("class", "card");
    name.textContent = `${object.name}`;
    address.textContent = `${object.address}`;
    phone.textContent = `${object.phone}`;
    email.textContent = `${object.email}`;
    schedule.textContent = `${object.schedule}`;
    emoji.setAttribute("src",  "templeimages/heart_emoji.png");
    emoji.setAttribute("id", "emoji");

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(schedule);
    card.append(emoji);

    document.querySelector("#tempmain").appendChild(card);


};