$('#topButton').click(function(){
  $('.noStyle').hide();
  $('#instructionsContent').fadeIn(1000);
  setTimeout(function(){
    $('#instructionsContent').hide();
    $('.noStyle').fadeIn(1000);
  }, 8000);


});

$('#audio').click(function(){
  $('iframe').remove();
  $('#audio').text("AUDIO OFF");


})
