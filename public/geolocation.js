$(document).ready(function(){

  var latitude;
  var longitude;
  var temp;
  var weather;

  if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position) {
   latitude = position.coords.latitude;
   longitude = position.coords.longitude;

   $.get("https://galvanize-cors-proxy.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=744e17f268d88782dd7dfdadbfabfe5b").done(function(data) {
     console.log(data);
     console.log(data.name);
     temp = data.main.temp;
     $('#content').removeClass('load');
     $('.start').removeClass('hidden');
     $('div').removeClass('hidden');
     $('button').removeClass('hidden');

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
    //  console.log(data.weather[0].main);
    //  console.log(weather);
    //  $('#content').append(temp);
    //  $('#content').append("<br>");
    //  $('#content').append(weather);

     console.log(weather);




          var gameState = level1;

      $('.start').click(function() {
        draw(gameState,weather);
      })


       $('.my_button').click(function() {
         var choice = $(this).attr('value');
         gameStateName = gameState[choice];
         gameState = window[gameStateName];
       if (gameState === gameOver) {
         endGame();
       } else if (gameState === victory){
         drawVictory();
       }
        else {
           draw(gameState,weather);
       }

     });

 })
 });
}






});
