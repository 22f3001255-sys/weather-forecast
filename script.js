document.querySelector('#fetch-weather').addEventListener('click', async () => {
    const city = document.querySelector('#city-input').value;
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true`);
    const data = await response.json();
    const { temperature, windspeed, humidity } = data.current_weather;
    document.querySelector('#weather-output').innerHTML = `<p>Temperature: ${temperature} °C</p><p>Humidity: ${humidity}%</p><p>Wind Speed: ${windspeed} m/s</p>`;
});