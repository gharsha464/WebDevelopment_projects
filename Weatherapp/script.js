const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherInfo = document.getElementById("weatherInfo");

getWeatherBtn.addEventListener("click", function() {
  const city = cityInput.value.trim();
  if (city !== "") {
    // Use a weather API to fetch weather data based on the city
    // Display weather information in the weatherInfo element
    weatherInfo.textContent = `Weather information for ${city}`;
  }
});
