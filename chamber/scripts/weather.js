const apiKey = "12c297d2bc3ff2a7c2fd4c757b4b78c2";
const lat = -12.0464; // Lima
const lon = -77.0428;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    const current = data.list[0];
    const tomorrow = data.list[8];
    const day2 = data.list[16];

    setText("temp", `Temp: ${Math.round(current.main.temp)}°C`);
    setText("desc", `Sky: ${current.weather[0].description}`);
    setText("humidity", `Humidity: ${current.main.humidity}%`);

    const sunrise = new Date(data.city.sunrise * 1000)
      .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(data.city.sunset * 1000)
      .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setText("sunrise", `Sunrise: ${sunrise}`);
    setText("sunset", `Sunset: ${sunset}`);

    setText("today", `Today: ${Math.round(current.main.temp)}°C`);
    setText("tomorrow", `Tomorrow: ${Math.round(tomorrow.main.temp)}°C`);
    setText("day2", `Next Day: ${Math.round(day2.main.temp)}°C`);
  })
  .catch(err => {
    console.error("Weather error:", err);
  });
