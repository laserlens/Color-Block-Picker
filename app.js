$(document).ready(function () {
  //global variable number to refrence in other funtions
var number;
  //function to start game triger the 1-4 random number gen and promp a color
$('#startButton').click(function start() {
  //random number genartor
  number = 1 + Math.floor(Math.random() * 4);
  //resets game on start click
  $('#trophy').text('');
  $('.color').text('Click Here');
// switch statement promps what color to click
  switch (number) {
    case 1:
      $('#colorPromp').text('Red')
      .css({
        'color': 'red'
      });
      number = 1;
      break;
    case 2:
      $('#colorPromp').text('Green')
      .css({
        'color': 'green'
      });
      break;
    case 3:
      $('#colorPromp').text('Yellow')
      .css({
        'color': 'yellow'
      });
      break;
    case 4:
      $('#colorPromp').text('Blue')
      .css({
        'color': 'blue'
      });
      break;
    }
});
// switch statments and funtion to find out if you won or loss.
$('#red').click(function () {
  console.log(number);
  switch (number) {
    case 1:
      $('#trophy').text('You Won Press Start to Play agian');
      for(i=0;i<3;i++) {
        $(this).fadeTo('slow', 0.5).text("WINNER Press Start to Play again").fadeTo('slow', 1.0);
      }
      break;
    default:
      $('#trophy').text('Wrong Choose Another Color');
      $(this).text('Wrong Try Another Color');
  }
});
$('#green').click(function () {
  console.log(number);
  switch (number) {
    case 2:
      $('#trophy').text('You Won Press Start to Play agian');
      for(i=0;i<3;i++) {
        $(this).fadeTo('slow', 0.5).text("WINNER  Press Start to Play again").fadeTo('slow', 1.0);
      }
      break;
    default:
      $('#trophy').text('Wrong Choose Another Color');
      $(this).text('Wrong Try Another Color');
  }
});
$('#yellow').click(function () {
  console.log(number);
  switch (number) {
    case 3:
      $('#trophy').text('You Won Press Start to Play agian');
      for(i=0;i<3;i++) {
        $(this).fadeTo('slow', 0.5).text("WINNER  Press Start to Play again").fadeTo('slow', 1.0);
      }
      break;
    default:
      $('#trophy').text('Wrong Choose Another Color');
      $(this).text('Wrong Try Another Color');
  }
});
$('#blue').click(function () {
  console.log(number);
  switch (number) {
    case 4:
      $('#trophy').text('You Won ');
      for(i=0;i<3;i++) {
        $(this).fadeTo('slow', 0.5).text("WINNER  Press Start to Play again").fadeTo('slow', 1.0);
      }
      break;
    default:
      $('#trophy').text('Wrong Choose Another Color');
      $(this).text('Wrong Try Another Color');
  }
});
});
