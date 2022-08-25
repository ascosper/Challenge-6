
 var btn = document.querySelector("#btn");

 btn.addEventListener("click", getWeather);
 function getWeather(e) { 
    
    e.preventDefault()
    console.log(document.querySelector("#location").value);
    var cityName = document.querySelector("#location").value;
    if (location == "San Antonio"){
        var stateCode = "48";
    }
    var apiUrl="http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + stateCode + "+1&limit=5&appid=4c3967125ed057615c4d7cf6424645ea"

fetch(apiUrl).then(function(data){
    console.log(data);
})
 }
// how to use api
// how to geocode
// how to use local storage