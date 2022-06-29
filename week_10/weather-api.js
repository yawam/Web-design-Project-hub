const weather = "https://api.openweathermap.org/data/2.5/weather?q=Accra,GH&APPID=8814fd6da240a82da4167186ac176270&units=metric";

async function getWeather(URL){
    const response = await fetch(URL);
    if(response.ok){
        const jsonObject =await response.json();
        console.log(jsonObject);

        let tempr = jsonObject.main.temp;
        let windspeed = jsonObject.wind.speed;
        let chill = Math.round((35.74 + (0.6215 * tempr))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*tempr*Math.pow(windspeed,0.16)));

        console.log(chill);
        document.querySelector("#wedchill").textContent = chill;
        document.querySelector("#wedspeed").textContent = windspeed;
        document.querySelector("#wednum").textContent = tempr;

        const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('#description').textContent = desc;


    }


};

getWeather(weather);

