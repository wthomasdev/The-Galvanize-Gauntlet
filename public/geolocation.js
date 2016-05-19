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
     $('#content').append('<iframe width="420" height="315" src="https://www.youtube.com/embed/BSFy8N-2CDo?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
      $('#splashScreen').removeClass('hidden');
      $('.noStyle').fadeIn(2000);
     $('.start').removeClass('hidden');
    //  $('div').removeClass('hidden');
    //  $('button').removeClass('hidden');

     console.log(temp);
     if (temp <= 273) {
        weather = "cold";
        $('#content').css("border", "15px solid #73AAE2");
     } else if (temp > 273 && temp <= 283) {
        weather = "mild";
        $('#content').css("border", "15px solid #B5EA7F");
     } else if (temp > 283 && temp <= 293) {
        weather = "warm";
        $('#content').css("border", "15px solid #E69A0E");
     } else {
        weather = "hot";
        $('#content').css("border", "15px solid #D72C0D");
     }
    //  console.log(data.weather[0].main);
    //  console.log(weather);
    //  $('#content').append(temp);
    //  $('#content').append("<br>");
    //  $('#content').append(weather);

     console.log(weather);




          var gameState = level1;

      $('.start').click(function() {
          $('.noStyle').hide();
          $('#instructionsContent').hide();
          $('#splashScreen').remove();
          $('#splashSegment').empty();
          $('div').fadeIn(500);
          $('.myButton').fadeIn(500);
        draw(gameState,weather);
      })


       $('.myButton').click(function() {
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
