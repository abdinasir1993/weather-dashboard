const API_KEY = "d92eced4f070a72612c2186a9ea527d8";

// const renderCities = () => {
//   // get recent cities from LS []u
//   // if [] is empty then render alert
//   // else render all recent cities
//   // add an event listener on div containing all cities
// };

// const renderCurrentWeather = (currentWeatherData) => {
//   // render the current weather data and append to section
// };

// const renderForecastWeather = (forecastWeatherData) => {
//   // render the forecast weather data and append each card to section
// };



const renderWeatherData = () => {
  // use API to fetch current weather data
  let search = document.getElementById("input-text").value;
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`;
  console.log(currentWeatherUrl)
  
  let items = [];

  fetch(currentWeatherUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      items = result;
      console.log(items)
    
      let cityName = items.name;
      console.log (cityName)
      let date =  items.dt;
      console.log(date)
      
      let temperature = items.main.temp;
      console.log(temperature)

      let humidity =  items.main.humidity;

      console.log (humidity)

      let windSpeed = items.wind.speed;
      console.log(windSpeed)

      $("#card-box").append(`<div><h1>Current Weather Data</h1> </div>

        
      <div>
       
        <h2>Location:${cityName} </h2>
        <div class=" d-flex justify-content-between flex-wrap">
          
          <div class="card" style="width: 12rem">
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
              
              <h5 class="card-title">Temperature:${temperature} </h5>
              <h5 class="card-title">Humidity:${humidity} </h5>
              <h5 class="card-title">Windspeed:${windSpeed} </h5>
              <p class="card-text">
             
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

`)


      
        
    })
    
    
};


  // get the lat and lon from current weather data API response
//   const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`;

  // render current weather data

  // render forecast weather dat
const handleFormSubmit = (event) => {
    
    event.preventDefault();
    //get text input
    let search = document.getElementById("input-text").value;
    console.log(search);
    //validate
  renderWeatherData()
    if (search) {
      // build object with full name and results
      console.log("good search");
      
    } else {
      alert("enter valid search");
    }
  };
  

const onReady = () => {
  // render recent cities
  console.log('ready')
};
form.addEventListener("submit", handleFormSubmit);

$(document).ready(onReady);