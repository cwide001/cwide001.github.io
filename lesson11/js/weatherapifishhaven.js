const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585000&units=imperial&appid=5005b4123f1980dc1d3419fb31d10581"

fetch(apiURL)

  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('currentTemp').textContent = jsObject.weather[0].main
    document.getElementById('Temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;

const temp = document.getElementById('currentTemp').textContent;
const wind = document.getElementById('windSpeed').textContent;

var t = parseFloat(temp);
var s = parseFloat(wind);

if (temperature <= 50 && wind >= 3) {
        windchill = Math.round(35.74 + (0.6215 * temperature) - (35.75*(wind**0.16)) + (0.4275*(temperature)*(wind**0.16)));
        document.getElementById('windChill').innerHTML = windchill;
}
else {
        document.getElementById('windChill').innerHTML = "N/A";

}


});
