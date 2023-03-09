const API_KEY = `25c8a0a0847869d43e68d0b04aed5105`;
const loadWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayWeather(data));
};
const displayWeather = (data) => {
  console.log(data);
  const temp = document.getElementById("temp");
  temp.innerText = data.main.temp;
  document.getElementById("weather").innerText = data.weather[0].main;
};
document.getElementById("btn-search").addEventListener("click", function () {
  const searchFeild = document.getElementById("search-feild");
  const cityName = searchFeild.value;
  console.log(cityName);
  document.getElementById("city").innerText = cityName;
  loadWeather(cityName);

  // clearing input feild
  searchFeild.value = " ";
});
loadWeather("dhaka");
