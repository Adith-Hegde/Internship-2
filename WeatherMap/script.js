const apiKey = "YOUR_API_KEY";
function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const resultDiv = document.getElementById("weatherResult");
      resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Weather:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    })
    .catch(err => {
      document.getElementById("weatherResult").innerHTML = `<p>${err.message}</p>`;
    });
}
