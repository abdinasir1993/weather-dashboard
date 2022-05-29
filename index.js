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
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;
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
    
      
      let icon = items.weather[0].icon
      console.log(icon)

      let visibility = items.visibility

      let pressure = items.main.pressure

      let clouds = items.clouds.all

      let cloudiness = ""
       
      if (clouds < 20 )  {
       cloudiness = "clear sky"

      } else if (clouds > 20 && clouds < 40 ) {
        cloudiness = "light cloud"

      } else if (clouds >41 && clouds < 60 ) {
        cloudiness = "cloudy"

      } else   {
        cloudiness = "mostly cloudy"

      }
      console.log (cloudiness)



      

      

      let feelslike = items.main.feels_like

      $("#all-container").append(` <h2> ${cityName} </h2>
      <section class="current-weather-section">
        <div class="main-weather-card">
            
          <div class="information">
              <div>
            <h3>${temperature}℃ </h3>
            <h4> </h4>
        </div>
            
          </div>
          
          <div class="information1">
              <div class ="info1">
              <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
            <h3>${temperature}℃</h3>
        </div>
        
            <div class="info1">
            <h3>${cloudiness} </h3>
            <h4>feels like : ${feelslike}℃ </h4>
        </div>
          </div>
          <div class="information">
            <div class="info-items">
              <h3>wind</h3>
              <h3>${windSpeed} mph </h3>
            </div>
            <div class="information">
                <div class="info-items">
                  <h3>humidity</h3>
                  <h3>${humidity} </h3>
                </div>
            
                    <div class="information">
                        <div class="info-items">
                          <h3>pressure</h2>
                          <h3>${pressure}hPA </h2>
                        </div>
                        <div class="information">
                            <div class="info-items">
                              <h3>dew point</h3>
                              <h3>12c</h3>
                            </div>

           
        </div>
      </section>
      `)



      
        
    })
    
    
};
const renderWeatherForecast = () => {
  for (i = 0; i < 5; i++)
  {
    $("#forecast").append(
      ` <div>
      <!-- title -->
      
      <div class="d-flex justify-content-between flex-wrap">
        <!-- forecast weather card 1 -->
        <div class="card" style="width: 12rem">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to
            </p>
            
          </div>
        </div>`)
  }
}


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
  renderWeatherForecast()

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
const form1 = document.getElementById("form")
form1.addEventListener("submit",handleFormSubmit);

$(document).ready(onReady);