const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', (evt) => {if(evt.keyCode == 13){
    getWeather(searchbox.value);
    document.querySelector("#weathercards").style.display = "block";
}
});

// function setQuery(evt) {
    
// if(evt.keyCode == 13){
//     getResults(searchbox.value);
// }
// };

// function getResults (query) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=8814fd6da240a82da4167186ac176270&units=metric`)
//         .then(weather => {
//         return weather.json();
//         }).then(getWeather);
//     }


async function getWeather(query){
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=8814fd6da240a82da4167186ac176270&units=metric`)
    //     .then(weather => {
    //     return weather.json();
    //     }).then(getWeather);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=5283d5540266ec837780c1439b818074&units=metric`);
    if(response.ok){
        const weather =await response.json();
        console.log(weather);

        let tempr = weather.main.temp;
        let windspeed = weather.wind.speed;
        let chill = Math.round((35.74 + (0.6215 * tempr))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*tempr*Math.pow(windspeed,0.16)));
        let humid = weather.main.humidity;

        console.log(chill);
        document.querySelector("#wedchill").textContent = `Wind-Chill - ${chill}`;
        document.querySelector("#wedspeed").textContent = `Wind-Speed - ${windspeed}`;
        document.querySelector("#wednum").textContent =   `Temperature - ${tempr}`;
        document.querySelector("#humidity").textContent =   `Humidity - ${humid}`;

        const iconsrc= `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        const desc = weather.weather[0].description;
        // document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('#description').textContent = desc;


    };


};

// getWeather(weather);