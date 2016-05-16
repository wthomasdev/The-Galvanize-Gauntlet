$(document).ready(function(){

  alert("Jquery loaded");
  var latitude;
  var longitude;
  var temp;
  var gamestate;

  if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position) {
   latitude = position.coords.latitude;
   longitude = position.coords.longitude;

   $.get("https://galvanize-cors-proxy.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=744e17f268d88782dd7dfdadbfabfe5b", function(data) {
     console.log(data);
     console.log(data.name);
     temp = data.main.temp;

     console.log(temp);
     if (temp <= 273) {
        gamestate = "cold";
     } else if (temp > 273 && temp <= 283) {
        gamestate = "mild";
     } else if (temp > 283 && temp <= 293) {
        gamestate = "warm";
     } else {
        gamestate = "hot";
     }
     console.log(data.weather[0].main);
     console.log(gamestate);
     $('#content').append(temp);
     $('#content').append("<br>");
     $('#content').append(gamestate);





 })
 });
}








});
