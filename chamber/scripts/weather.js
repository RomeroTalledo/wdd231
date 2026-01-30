const weatherData = {
  current: {
    temp: 75,
    desc: "Partly Cloudy",
    humidity: 34,
    sunrise: "7:30 AM",
    sunset: "5:59 PM"
  },
  forecast: {
    today: "Today: 75°F",
    tomorrow: "Tomorrow: 78°F",
    day2: "Next Day: 72°F"
  }
};

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

setText("temp", `Temp: ${weatherData.current.temp}°F`);
setText("desc", `Sky: ${weatherData.current.desc}`);
setText("humidity", `Humidity: ${weatherData.current.humidity}%`);
setText("sunrise", `Sunrise: ${weatherData.current.sunrise}`);
setText("sunset", `Sunset: ${weatherData.current.sunset}`);

setText("today", weatherData.forecast.today);
setText("tomorrow", weatherData.forecast.tomorrow);
setText("day2", weatherData.forecast.day2);
