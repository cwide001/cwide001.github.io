const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5005b4123f1980dc1d3419fb31d10581"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  
    document.getElementById('currentTemp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('Temp').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);
    document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);
  
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
