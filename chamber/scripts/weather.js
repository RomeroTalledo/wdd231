const weatherData = {
  current: {
    temp: 75,
    desc: "Partly Cloudy",
    high: 85,
    low: 52,
    humidity: 34,
    sunrise: "7:30 AM",
    sunset: "5:59 PM"
  },
  forecast: {
    today: "Today: 90°F",
    tomorrow: "Wednesday: 89°F",
    day2: "Thursday: 68°F"
  }
};

// Mostrar clima actual
document.getElementById("temp").textContent = `Temp: ${weatherData.current.temp}°F`;
document.getElementById("desc").textContent = `Sky: ${weatherData.current.desc}`;
document.getElementById("high").textContent = `High: ${weatherData.current.high}°F`;
document.getElementById("low").textContent = `Low: ${weatherData.current.low}°F`;
document.getElementById("humidity").textContent = `Humidity: ${weatherData.current.humidity}%`;
document.getElementById("sunrise").textContent = `Sunrise: ${weatherData.current.sunrise}`;
document.getElementById("sunset").textContent = `Sunset: ${weatherData.current.sunset}`;

// Mostrar pronóstico
document.getElementById("today").textContent = weatherData.forecast.today;
document.getElementById("tomorrow").textContent = weatherData.forecast.tomorrow;
document.getElementById("day2").textContent = weatherData.forecast.day2;
