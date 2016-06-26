var latitude;
var longitude;
var temp;
var weather;
var gameState = level1;

$(document).ready(function() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            $.get("https://galvanize-cors-proxy.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=744e17f268d88782dd7dfdadbfabfe5b").done(function(data) {
                temp = data.main.temp;
                $('#content').removeClass('load');
                $('#content').append('<iframe width="420" height="315" src="https://www.youtube.com/embed/BSFy8N-2CDo?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
                $('#welcomeScreen').removeClass('hidden');
                $('h1').fadeIn(1000).delay(1000).fadeOut(2000);

                setTimeout(function() {
                    $('#welcomeScreen').remove();
                    $('#whatMode').fadeIn(3000).delay(3000).fadeOut(1000);
                    $('#whatMode').empty();
                }, 3000);
                setTimeout(function() {
                    $('#whatMode').remove();
                    $('#splashScreen').removeClass('hidden');
                    $('.noStyle').fadeIn(2000);
                    $('.start').removeClass('hidden');
                }, 7500);

                if (temp <= 273) {
                    weather = "cold";
                    setTimeout(function() {
                        $('#content').css("border", "15px solid #73AAE2");
                        hardCore();
                    }, 3000);
                } else if (temp > 273 && temp <= 283) {
                    weather = "mild";
                    setTimeout(function() {
                        $('#content').css("border", "15px solid #B5EA7F");
                        extreme();
                    }, 3500);
                } else if (temp > 283 && temp <= 293) {
                    weather = "warm";
                    setTimeout(function() {
                        $('#content').css("border", "15px solid #E69A0E");
                        hell();
                    }, 3500);
                } else {
                    weather = "hot";
                    setTimeout(function() {
                        $('#content').css("border", "15px solid #D72C0D");
                        traumatic();
                    }, 3500);
                }

                startGame(gameState, weather);
                getPlayerChoice(gameState, weather);
            })
        });
    }
});

function getPlayerChoice (gameState, weather) {
  $('.myButton').click(function() {
      var choice = $(this).attr('value');
      gameStateName = gameState[choice];
      gameState = window[gameStateName];
      if (gameState === gameOver) {
          endGame();
      } else if (gameState === victory) {
          drawVictory();
      } else {
          draw(gameState, weather);
      }

  });
};

function startGame (gameState, weather) {
  $('.start').click(function() {
      $('.noStyle').hide();
      $('#instructionsContent').hide();
      $('#splashScreen').remove();
      $('#splashSegment').empty();
      $('div').fadeIn(500);
      $('.myButton').fadeIn(500);
      draw(gameState, weather);
  })
}
