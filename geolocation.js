$(document).ready(function(){

  alert("i'm working baby");
  var latitude;
  var longitude;

  if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position) {
   latitude = position.coords.latitude;
   longitude = position.coords.longitude;

   $.get("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=744e17f268d88782dd7dfdadbfabfe5b", function(data) {
     console.log(data);
     console.log(data.main.temp);
     console.log(data.weather[0].main);





 })
 });
}








});
