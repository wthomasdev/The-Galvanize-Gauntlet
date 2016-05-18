$('#topButton').click(function(){
  $('.noStyle').hide();
  $('#instructionsContent').fadeIn(1000);
  setTimeout(function(){
    $('#instructionsContent').hide();
    $('.noStyle').fadeIn(1000);
  }, 5000);


});
