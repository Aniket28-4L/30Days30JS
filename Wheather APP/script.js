const apiKey = "eb6aae61650271d339a2126340f56538";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore";

async function checkWheather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

}

checkWheather();