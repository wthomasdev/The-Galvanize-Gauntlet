$(document).ready(function() {

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
     $('div').removeClass('load');

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



  function drawVictory(){
      $('#test').append("<br>");
    $('#test').append( "<p>Hello</p>" );
  }

  function gameOver() {
    $('#test').append("<br>");
    $('#test').append("<p>You Lose!</p>");
  }

  function other() {
    $('#test').append("<br>");
    $('#test').append("<p>Something else happened</p>");
  }

var gameState = {
  image: "url",
  state: "good",
  level: "1",
  text: "some text",
  question1: "question?",
  question2: "question?",
  choice1: {
    image: "url",
    level: "2",
    state: "ok",
    text: "some text",
    buttonText: "question?",
    buttonText2: "question?",
    choice1: "gameOver",
    choice2: {
      image: "url",
      level: "3",
      state: "ok",
      text: "some text",
      buttonText: "question?",
      buttonText2: "question?",
      choice1: {
        state: "finished"
      },
     choice2: {
        state: "gameOver"
      }
    },
  },
 choice2: {
    state: "finished"
  }
 };





  $('.my_button').click(function() {
    var choice = $(this).attr('value');
    gameState = gameState[choice];
    console.log(gameState);
  if (gameState[choice] === "gameOver") {
    gameOver();
  } else if (gameState.state === "finished"){
    drawVictory();
  } else {
    other();
  }

        });

  });
