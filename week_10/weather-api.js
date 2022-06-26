const weather = "https://api.openweathermap.org/data/2.5/weather?q=Accra,GH&APPID=8814fd6da240a82da4167186ac176270&units=metric";

async function getWeather(URL){
    const response = await fetch(URL);
    if(response.ok){
        const jsonObject =await response.json();
        console.log(jsonObject);

        let currtemp = jsonObject.main.temp;
    
        document.querySelector("#wednum").textContent = currtemp;

        const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('#description').textContent = desc;


    }


};

getWeather(weather);

