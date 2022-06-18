const requestURL = "https://yawam.github.io/WDD-230/week_9/scripts/data.json";

async function getComps(URL){
    const response = await fetch(URL);
    if(response.ok){
        const jsonObject =await response.json();
        const company = jsonObject["Companies"];
        company.forEach(displayComps);


    }
};

getComps(requestURL);

function displayComps(object){
    let card = document.createElement("section");
    let image = document.createElement("img");
    let name = document.createElement("p");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p");

    image.setAttribute("src", object.image);
    image.setAttribute("alt", "Company Logo");

};