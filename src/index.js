// Search Button
function showTemp(response) {
    console.log(response);
    let cityTemp = document.querySelector("#temperature");
    cityTemp.innerHTML = Math.round(response.data.main.temp);
  
    let cityHumidity = document.querySelector("#Humidity");
    cityHumidity.innerHTML = response.data.main.humidity;
  
    let cityWind = document.querySelector("#Wind");
    cityWind.innerHTML = response.data.wind.speed;
  }
  
  function showCity() {
    let searchBox = document.querySelector("#search-box");
    let city = document.querySelector("#city");
    let value = searchBox.value;
    city.innerHTML = value;
    let apiKey = "4b3503b2f08a729413c4d33ef1186004";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }
  let searchBtn = document.querySelector("#search-btn");
  searchBtn.addEventListener("click", showCity);
  
  // Location Button
  function showLocation(response) {
    console.log(response);
    let div = document.querySelector("#coords");
    div.innerHTML = `The coordinate is ${response.data.coord.lat} and ${response.data.coord.lon} `;
  }
  function showCoordinate() {
    let searchBox = document.querySelector("#search-box");
    let value = searchBox.value;
    let apiKey = "4b3503b2f08a729413c4d33ef1186004";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showLocation);
  }
  let locationBtn = document.querySelector("#location-btn");
  locationBtn.addEventListener("click", showLocation);
  