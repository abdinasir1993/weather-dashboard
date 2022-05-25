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
  
  console.log (currentWeatherUrl)


  // from the response cherry pick all the data you want to see in the current weather card

  // get the lat and lon from current weather data API response
//   const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`;

  // render current weather data

  // render forecast weather data
};

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
};
form.addEventListener("submit", handleFormSubmit);

$(document).ready(onReady);

