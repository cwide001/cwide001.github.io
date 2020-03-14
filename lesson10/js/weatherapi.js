const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=32b36f37051b2578eec25a9c85d88e8a"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

   
    document.getElementById('currentTemp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('Temp').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
    document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);

    /*const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);*/
  

const temp = document.getElementById('currentTemp').textContent;
const wind = document.getElementById('windSpeed').textContent;

var t = parseFloat(temp);
var s = parseFloat(wind);

var windChill;

if (t>50 || s<3) {
    windChill = "N/A"
    document.getElementById('windChill').innerHTML = windChill;
}
else {
    windChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    windChill = Math.round(windChill*10)/10;
    document.getElementById('windChill').innerHTML = windChill + "&deg;";
}

    
});
