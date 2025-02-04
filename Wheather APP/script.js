const apiKey = "eb6aae61650271d339a2126340f56538";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWheather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

}

checkWheather();