var city = "";
var cityList = document.querySelectorAll(".city");

var searchButton = document.querySelector(".search-button");
var cityName = document.querySelector(".city-name");
var sarchInput = document.querySelector(".search-input");

function loadSaved(){
    var tempSaved= localStorage.getItem("Saved");
    if(tempSaved){
        cityList = JSON.parse(tempSaved);
    }           
}
loadSaved();
setListeners();

function setListeners(){
    searchButton.addEventListener("click", function(){
        city = sarchInput.value;
        getWeather(city);
        sarchInput.value = "";
    });
    cityList.forEach(function(city){
        city.addEventListener("click", function(){
            getWeather(city.textContent);
        });
    });
}
function forecast(lat, lon){
    var forecastUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&units=imperial&appid=8c2e1e6b2e6d0d6e8b6c7f6e0f6d9d6b";
    fetch(forecastUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        var forecastList = document.querySelectorAll(".forecast");
        for(var i = 0; i < forecastList.length; i++){
            forecastList[i].textContent = data.daily[i].temp.day;
        }
    });

}
function fillForecast(){
    var forecastList = document.querySelectorAll(".forecast");
    for(var i = 0; i < forecastList.length; i++){
        forecastList[i].textContent = "";
    }
}   
function getWeather(city){
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=8c2e1e6b2e6d0d6e8b6c7f6e0f6d9d6b";
    fetch(weatherUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        cityName.textContent = data.name;
        var temp = document.querySelector(".temp");
        temp.textContent = data.main.temp;
        var humidity = document.querySelector(".humidity");
        humidity.textContent = data.main.humidity;
        var windSpeed = document.querySelector(".wind-speed");
        windSpeed.textContent = data.wind.speed;
        var uvIndex = document.querySelector(".uv-index");
        uvIndex.textContent = data.coord;
        forecast(data.coord.lat, data.coord.lon);
    });
}


