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
const renderWeatherForecast = (lat, lon) => {
  const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`
  console.log(forecastWeatherUrl)
  let items = [];
  

  fetch(forecastWeatherUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      items = result;
      console.log(items)
    
  for (i = 0; i < 5; i++){

    let temp = items.daily[i].temp.day
    console.log (temp)
    
    let icon = items.daily[i].weather[0].icon
    console.log (icon)
    let tempDate = items.daily[i].dt
    let date = moment.unix(tempDate).format('DD-MM-YYYY');
    console.log(date)
    let description = items.daily[i].weather[0].description
    
    $("#forecast").append(
      ` <div>
      <!-- title -->
      
      <div class="d-flex justify-content-between flex-wrap">
        <!-- forecast weather card 1 -->

    
        <div class="card" style="width: 12rem">
        <h5 class="card-title">${date}</h5>
          <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 class="card-title">${temp}℃</h5>
            <p class="card-text">
            ${description}
            </p>
            
          </div>
        </div>`)
      }
      })
 
}




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
      
     let  tempDate = items.dt;
     let  date = moment.unix(tempDate).format('DD-MM-YYYY');
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

      let clouds = items.weather[0].description

      let cloudiness = ""
      
      

      
       
      // if (clouds < 20 )  {
      //  cloudiness = "clear sky"

      // } else if (clouds > 20 && clouds < 40 ) {
      //   cloudiness = "light cloud"

      // } else if (clouds >41 && clouds < 60 ) {
      //   cloudiness = "cloudy"

      // } else   {
      //   cloudiness = "mostly cloudy"

      // }
      console.log (cloudiness)

      // if (icon = 01d.png ) 
      const main = document.getElementById("main")
      main.setAttribute('class', `a${icon}`)

  
      const renderDate = () => {
        return moment().format("ddd, MMMM, YYYY HH:mm");
      };
      $("#currentDay").text(renderDate);
      



      

      

      let feelslike = items.main.feels_like

      $("#all-container").append(` <h2> </h2>
      <section class="current-weather-section">
        <div class="main-weather-card">
            
          <div class="information">
              <div>
            <h2>${cityName} </h2>
            <h4>${date} </h4>
        </div>
            
          </div>
          
          <div class="information1">
              <div class ="info1">
              <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
            <h3>${temperature}℃</h3>
        </div>
        
            <div class="info1">
            <h3>${clouds} </h3>
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

      let lat = items.coord.lat
      let lon = items.coord.lon
      renderWeatherForecast(lat, lon) 
      $("#submit").click(refreshButtonClick)



     
        
    })
    
    
};




  // get the lat and lon from current weather data API response
  // const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`;

  // render current weather data

  // render forecast weather dat
const handleFormSubmit = (event) => {

  const container = document.getElementById("container")
  const main = document.getElementById("main")
  
  container.remove()

 

  $("#main").append(` <section id="container">
  <section id="all-container" class=" section4 main-partrow border">

 </section>
<!-- Form and recent history section -->



<!-- current and future data section -->
<section id="forecast" class=" forecast col-sm-12 col-md-9 border">
 <!-- current weather data -->
 <h3>5 Day Forecast</h3>

 <!-- forecast weather data -->

</section>
</section>
</section>`)
    
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
const form1 = document.getElementById("form")
form1.addEventListener("submit",handleFormSubmit);

$(document).ready(onReady);