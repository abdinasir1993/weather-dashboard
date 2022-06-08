const API_KEY = "d92eced4f070a72612c2186a9ea527d8";


// const renderCities = () => {
//   // get recent cities from LS []u
//   // if [] is empty then render alert
//   // else render all recent cities
//   // add an event listener on div containing all cities
// };
//render weather forecast
const renderWeatherForecast = (lat, lon) => {
  const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`
  
  let items = [];
  

  fetch(forecastWeatherUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      items = result;
     
      // forloop for 5 day forecast
    
  for (i = 0; i < 5; i++){

    let temp = items.daily[i].temp.day
    
    let icon = items.daily[i].weather[0].icon
    
    let tempDate = items.daily[i].dt
    let date = moment.unix(tempDate).format('DD-MM-YYYY');
   
    let description = items.daily[i].weather[0].description
    
  //  appended forecast
  
    $("#forecast").append(
      ` <div>
      <!-- title -->
      
      <div class="d-flex justify-content-between flex-wrap">
        <!-- forecast weather card 1 -->

    
        <div class="card" style="width: 12rem">
        <h5>${date}</h5>
          <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="card-img-top" alt="..." />
          <div class="card-body">
          <h5 >${temp}℃</h5>
            <p >
            ${description}
            </p>
            
          </div>
        </div>`)
      }
      })
 
}



// render current weather
const renderCurrentWeather = (search) => {
  // use API to fetch current weather data
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;
  
  
  let items = [];
  

  fetch(currentWeatherUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      items = result;
      
    
      let cityName = items.name;
      
      
     let  tempDate = items.dt;
     let  date = moment.unix(tempDate).format('DD-MM-YYYY');
      
      
      let temperature = items.main.temp;
    

      let humidity =  items.main.humidity;


      let windSpeed = items.wind.speed;
    
      
      let icon = items.weather[0].icon
      
      let visibility = items.visibility

      let pressure = items.main.pressure

      let clouds = items.weather[0].description
      
      let feelslike = items.main.feels_like

      let cloudiness = ""
      
      

 
      const main = document.getElementById("main")
      
      main.setAttribute('class', `a${icon}`)

      // rendered date function

  
      const renderDate = () => {
        return moment().format("ddd, MMMM, YYYY HH:mm");
      };
      $("#currentDay").text(renderDate);
      



      

      

      // rendering current weather section



      $("#all-container").append(` <h2> </h2>
      <section class="current-weather-section">
        <div >
            
          <div class="information">
              <div>
            <h2>${cityName} </h2>
            <h3>${date} </h3>
        </div>
            
          </div>
          
          <div class="information1">
              <div >
              <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
            <h3>${temperature}℃</h3>
        </div>
        
            <div >
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



const handleFormSubmit = (event) => {

  const container = document.getElementById("container")
  
  
  container.remove()

  const mainContainer = document.getElementById("main-container")
  $("#main-container").append(` <section id="container">
  <section id="all-container" >

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
   
   

    if (search) {
       //validate
  renderCurrentWeather(search)
  
      
    } else {
      alert("enter valid search");
    }
  };
  

const onReady = () => {
  /
  
};
const form1 = document.getElementById("form")
form1.addEventListener("submit",handleFormSubmit);

$(document).ready(onReady);