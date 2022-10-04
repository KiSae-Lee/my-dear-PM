const API_KEY = "1e7f54ab82e176b74794c7d4b0d89236";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const docWeather = document.querySelector("#weather");

      const nameContainer = document.createElement("span");
      const weatherContainer = document.createElement("span");
      const tempContainer = document.createElement("span");

      const city = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;

      nameContainer.innerText = city;
      weatherContainer.innerText = weather;
      tempContainer.innerText = temp;

      docWeather.appendChild(nameContainer);
      docWeather.appendChild(weatherContainer);
      docWeather.appendChild(tempContainer);
    }); // promise. not happen immediately. must use 'then'.
}

function onGeoError() {
  alert("Cannot find your geolocation.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
