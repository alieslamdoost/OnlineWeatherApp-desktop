const $ = document;

const btnElem = $.querySelector("button");
const inputElem = $.querySelector("input");
const cityElem = $.querySelector(".city");
const tempElem = $.querySelector(".temp");
const weatherElem = $.querySelector(".weather");
const hilowElem = $.querySelector(".hi-low");
const windElem = $.querySelector(".wind");
const humidityElem = $.querySelector(".humidity");

const apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q",
  key: "11aa57f4010595715faf84cfbd869e1b",
};

function fetchData() {
  let countryValue = inputElem.value;

  fetch(`${apiData.url}=${countryValue}&appid=${apiData.key}`)
    .then((res) => res.json())
    .then((data) => {
      showData(data);
    });
}

function showData(data) {
  cityElem.innerHTML = `Weather in ${data.name} , ${data.sys.country} `;
  tempElem.innerHTML = Math.ceil(`${data.main.temp}` - 273.15) + "°c";
  weatherElem.innerHTML = `weather : ${data.weather[0].main}`;
  hilowElem.innerHTML =
    Math.ceil(`${data.main.temp_min}` - 273.15) +
    " °c" +
    " / " +
    Math.ceil(`${data.main.temp_max}` - 273.15) +
    " °c";
  windElem.innerHTML = `Wind speed: ${data.wind.speed} km/h`;
  humidityElem.innerHTML = `Humidity: ${data.main.humidity}%`;
}

btnElem.addEventListener("click", () => {
  $.querySelector(".weather").classList.remove("loading");
  fetchData();
});
