//Constants used
const myApiKey = "a6bb88071d5eca0e515e89651f2c2b71";
const searchCity = document.getElementById("searchCity");
const searchButton = document.getElementById("searchButton");
const searches = document.getElementById("previousSearches");
const clearButton = document.getElementById("clearButton");

//Local Storage
var savedCities = JSON.parse(localStorage.getItem("search")) || [];

//Variables used
var todaysWeather = document.getElementById("todaysWeather");
var temperature = document.getElementById("temperature");
var windSpeeds = document.getElementById("windSpeeds");
var humidity = document.getElementById("humidity");
var dayOne = document.getElementById("firstDay");
var dayTwo = document.getElementById("secondDay");
var dayThree = document.getElementById("thirdDay");
var dayFour = document.getElementById("fourthDay");
var dayFive = document.getElementById("fifthDay");
var image1 = document.getElementById("firstImage");
var image2 = document.getElementById("secondImage");
var image3 = document.getElementById("thirdImage");
var image4 = document.getElementById("fourthImage");
var image5 = document.getElementById("fifthImage");
var temperature1 = document.getElementById("firstTemp");
var temperature2 = document.getElementById("temperature2");
var temperature3 = document.getElementById("temperature3");
var temperature4 = document.getElementById("temperature4");
var temperature5 = document.getElementById("temperature5");
var winds1 = document.getElementById("firstWind");
var winds2 = document.getElementById("windSpeeds2");
var winds3 = document.getElementById("windSpeeds3");
var winds4 = document.getElementById("windSpeeds4");    
var winds5 = document.getElementById("windSpeeds5");
var humidity1 = document.getElementById("firstHum");
var humidity2 = document.getElementById("humidity2");
var humidity3 = document.getElementById("humidity3");
var humidity4 = document.getElementById("humidity4");
var humidity5 = document.getElementById("humidity5");




function weatherData() {

//function to get the data from the API
    function getForecast(city) {
        var apiLink = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + myApiKey;

        fetch(apiLink)
            .then(function (response) {
                console.log(response)
                return response.json()
            })
            .then(function (data) {
                console.log(data);
                currentForecast(data, city);
            });
    }

//Function for Current forecast in the city searched
    function currentForecast(weather, searchCity) {
        todaysWeather.textContent = searchCity;

        var date = document.createElement("span");
        date.textContent = " (" + moment(weather.dt.value).format("MMM D, YYYY") + ") ";
        todaysWeather.append(date);
        var weatherIcon = document.createElement("img")
        weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        todaysWeather.appendChild(weatherIcon);
        temperature.innerHTML = "Temperature: " + weather.main.temp + " °F";
        windSpeeds.innerHTML = "Wind Speeds: " + weather.wind.speed + " MPH";
        humidity.innerHTML = "Humidity: " + weather.main.humidity + "%";
    }

//function for the forecast for the next five days
    function nextFiveDays(city) {
        var apiLink = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial' + '&appid=' + myApiKey;

        fetch(apiLink)
            .then(function (response) {
                return response.json()
                    .then(function (data) {
                        showNextDays(data);
                    });
            });
    }

//code to show the information in the 5 card slots
    function showNextDays(weather) {

        //First Day forecast
        dayOne.innerHTML = moment.unix(weather.list[8].dt).format("MMM D, YYYY");
        var weatherImage = document.createElement("img");
        weatherImage.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.list[8].weather[0].icon + "@2x.png");
        weatherImage.setAttribute("alt", weather.list[8].weather[0].description);
        image1.append(weatherImage);
        temperature1.innerHTML = "Temperature: " + weather.list[8].main.temp + " °F";
        winds1.innerHTML = "Wind Speeds: " + weather.list[8].wind.speed + " MPH";
        humidity1.innerHTML = "Humidity: " + weather.list[8].main.humidity + "%";
   
        //Second Day forecast
        dayTwo.innerHTML = moment.unix(weather.list[16].dt).format("MMM D, YYYY");
        var weatherImage2 = document.createElement("img");
        weatherImage2.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.list[16].weather[0].icon + "@2x.png");
        weatherImage2.setAttribute("alt", weather.list[16].weather[0].description);
        image2.append(weatherImage2);
        temperature2.innerHTML = "Temperature: " + weather.list[16].main.temp + " °F";
        winds2.innerHTML = "Wind Speeds: " + weather.list[16].wind.speed + " MPH";
        humidity2.innerHTML = "Humidity: " + weather.list[16].main.humidity + "%";

        //Third Day forecast
        dayThree.innerHTML = moment.unix(weather.list[24].dt).format("MMM D, YYYY");
        var weatherImage3 = document.createElement("img");
        weatherImage3.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.list[24].weather[0].icon + "@2x.png");
        weatherImage3.setAttribute("alt", weather.list[24].weather[0].description);
        image3.append(weatherImage3);
        temperature3.innerHTML = "Temperature: " + weather.list[24].main.temp + " °F";
        winds3.innerHTML = "Wind Speeds: " + weather.list[24].wind.speed + " MPH";
        humidity3.innerHTML = "Humidity: " + weather.list[24].main.humidity + "%";

        //Fourth Day forecast
        dayFour.innerHTML = moment.unix(weather.list[32].dt).format("MMM D, YYYY");
        var weatherImage4 = document.createElement("img");
        weatherImage4.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.list[32].weather[0].icon + "@2x.png");
        weatherImage4.setAttribute("alt", weather.list[32].weather[0].description);
        image4.append(weatherImage4);
        temperature4.innerHTML = "Temperature: " + weather.list[32].main.temp + " °F";
        winds4.innerHTML = "Wind Speeds: " + weather.list[32].wind.speed + " MPH";
        humidity4.innerHTML = "Humidity: " + weather.list[32].main.humidity + "%";

        //Fifth Day forecast
        dayFive.innerHTML = moment.unix(weather.list[38].dt).format("MMM D, YYYY");
        var weatherImage5 = document.createElement("img");
        weatherImage5.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.list[38].weather[0].icon + "@2x.png");
        weatherImage5.setAttribute("alt", weather.list[38].weather[0].description);
        image5.append(weatherImage5);
        temperature5.innerHTML = "Temperature: " + weather.list[38].main.temp + " °F";
        winds5.innerHTML = "Wind Speeds: " + weather.list[38].wind.speed + " MPH";
        humidity5.innerHTML = "Humidity: " + weather.list[38].main.humidity + "%";
    }


//function to work the search button
    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        var cityLocated = searchCity.value;
        getForecast(cityLocated);
        nextFiveDays(cityLocated)
        savedCities.push(cityLocated);
        localStorage.setItem("search", JSON.stringify(savedCities));
        searchHistory();
    })


//function to show what cities you have searched
    function searchHistory() {
        searches.innerHTML = "";

        for (let i = 0; i < savedCities.length; i++) {
            let pastCities = document.createElement("input");
            pastCities.setAttribute("type", "text");
            pastCities.setAttribute("value", savedCities[i]);
            pastCities.addEventListener("click", function () {
                getForecast(pastCities.value);
            })
            searches.append(pastCities);
        }
    }

    searchHistory();
    if (searchHistory.length > 0) {
        getForecast(searchHistory[searchHistory.length - 1]);
    }

//function to clear your searched cities
    clearButton.addEventListener("click", function () {
        localStorage.clear();
        savedCities = [];
        searchHistory();
    })

}
weatherData();