$(document).ready(function(){

  var latitude;
  var longitude;
  var temp;
  var weather;

  if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position) {
   latitude = position.coords.latitude;
   longitude = position.coords.longitude;

   $.get("https://galvanize-cors-proxy.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=744e17f268d88782dd7dfdadbfabfe5b", function(data) {
     console.log(data);
     console.log(data.name);
     temp = data.main.temp;
     $('div').removeClass('load');
     $('div').append("<h1>Loaded</h1>")

     console.log(temp);
     if (temp <= 273) {
        weather = "cold";
     } else if (temp > 273 && temp <= 283) {
        weather = "mild";
     } else if (temp > 283 && temp <= 293) {
        weather = "warm";
     } else {
        weather = "hot";
     }
     console.log(data.weather[0].main);
     console.log(weather);
     $('#content').append(temp);
     $('#content').append("<br>");
     $('#content').append(weather);





 })
 });
}


console.log(gamestate);





});
