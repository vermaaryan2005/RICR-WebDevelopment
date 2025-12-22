async function getWeather(){
    const city= document.getElementById("city").ariaValueMax.trim();
    const {lat,lon} = await getGeoLoc(city);

    const response= await fetch('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=056a61d9d7f3343f0d63f9ddf98ce7bd');
const data= await response.json();
document.getElementById("weatherdata").innerHTML= '
           <div>
            <><p>Temprature : ${(data.main.temp - 273.14).toFixed(2)}C</p>
            <p>Humidity : ${data.main.humidity}%</p>
            <p>Description : ${data.weather[0].description}</p></>
        /div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}
            @4x.png" alt="WeatherIcon"/>
';
}
async function getGeoLoc(City){
    console.log(City);
    const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=5&appid=056a61d9d7f3343f0d63f9ddf98ce7bd');

    const data = await response.json();

    const lat = data[0].lat;
    const lon = data[0].lan; 

    return {lat,lon };



}