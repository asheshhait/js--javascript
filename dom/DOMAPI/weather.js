const apiKey = "YOUR_API_KEY"; // <-- Replace with your OpenWeather API key
const getWeatherBtn = document.getElementById("get-weather");
const cityInput = document.getElementById("city-input");
const resultDiv = document.getElementById("weather-result");


getWeatherBtn.addEventListener ("click",async()=>{
    const city = cityInput.value.trim()
    if(!city){
        resultDiv.innerHTML = "<P> please enter a city name </p>"
        return;
    }

    resultDiv.innerHTML = "<p> loading</p>"
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        const data = await res.json()
         const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
         resultDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="${icon}" alt="weather icon" />
      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
    } catch (error) {
         resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
})  

