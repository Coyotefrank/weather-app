
var resultsContainer = document.querySelector(".weatherContainer");
function renderWeather(weathers) {
  var url=`https://api.openweathermap.org/data/2.5/forecast?lat=${weathers.coord.lat}&lon=${weathers.coord.lon}&appid=f7782879ec117ba6cf0a4aa3ad7235e4`;
  fetch(url)
  .then(response => response.json())
  .then(data => fiveDaysDisplay(data.list));
  console.log(weathers);
  console.log("result on line 4", resultsContainer);
  
  var city = document.createElement("p");
  city.textContent = weathers.name;
  //resultsContainer.appened(city);
  document.querySelector("body").append(city);
  console.log("result on line 9", resultsContainer);

  var temp = document.createElement("p");
  temp.textContent = "temp: " + weathers.main.temp + "F";
  resultsContainer.append(temp);
  console.log("result on line 14", temp);
  var visibility = document.createElement("p");
  visibility.textContent = "Visibility " + weathers.visibility + "%";
  console.log("result on line 18", visibility);
  city.append(temp);
  //document.querySelector(".container2").append(city);
}
function fetchWeather(city) { 
  var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7782879ec117ba6cf0a4aa3ad7235e4`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    renderWeather(data)
  });
}
function fiveDaysDisplay(data) {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element.dt_txt.includes("00:00:00")) {
      console.log(element)
    }
  }

   for(i=0;i<5;i++){
    var iconcContainer =document.getElementById("iconcContainer-"+i);
    iconcContainer.innerHTML+=`<img src="https://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png">`;
   
   }
}
document.getElementById("searchForCity").addEventListener("click", function(event){
  event.preventDefault()
  var userInput=document.getElementById("searchInput")
  fetchWeather(userInput.value)
})

// fetchWeather();
// function searchWeather() {
//   var city = document.getElementById("cityInput").value;
//   var apiKey = '249be4de6fc1f3ced3639f3f0e602786'; // Replace with your actual API key
//   var weatherContainer = document.getElementById("weatherContainer");

//   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=249be4de6fc1f3ced3639f3f0e602786`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       // Extract relevant weather information from the API response
//       var location = data.location.name;
//       var temperature = data.current.temp;
//       var condition = data.current.condition.text;

//       // Display the weather information in the weatherContainer div
//       weatherContainer.innerHTML = `
//         <h2>Weather in ${location}</h2>
//         <p>Temperature: ${temperature}°C</p>
//         <p>Condition: ${condition}</p>
//       `;
//     })
//   }
    // .catch(error => {
    //   // Handle any errors that occur during the API request
    //   console.error('Error fetching weather data:', error);
    //   weatherContainer.innerHTML = 'An error occurred while fetching weather data.';
    // });
  



//global variables, what needs to be stored and referenced in
// var container1,document=queryselector("container1")
// var container2,document=queryselector("continer2")
//multipul functions
//request URLs with specefic variable names
// store API keys

  //batch all of the dom element selectors

// functions
  //checking local storage 

  // create search function  (can be broken upinto multiple functions)
     //take in what was typed in the input field
  //   var apiKey = 'YOUR_API_KEY';


