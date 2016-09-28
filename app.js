$(document).ready(function () {
  //global variable number to refrence in other funtions
var number;
  //function to start game triger the 1-4 random number gen and promp a color
$('#startButton').click(function start() {
  //random number genartor
  number = 1 + Math.floor(Math.random() * 4);
  //resets game on start click
  $('#trophy').text('');
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
    case number = 1:
      $('#trophy').text('You Won Press Start to Play agian');
      /*
      $('#red').animate({ 'backgroundColor', "white"}, 'slow');
      $('#red').animate({ 'backgroundColor', "red"}, 'slow');
      $('#red').animate({ 'backgroundColor', "white"}, 'slow');
      $('#red').animate({ 'backgroundColor', "red"}, 'slow');
      */
      break;
    default:
      $('#trophy').text('Wrong Choose Another Color');
  }
});
$('#green').click(function () {
  console.log(number);
  switch (number) {
    case number = 2:
      $('#trophy').text('You Won Press Start to Play agian');
      break;
    default:
      $('#trophy').text('Wrong Choose Another Color');
  }
});
$('#yellow').click(function () {
  console.log(number);
  switch (number) {
    case number = 3:
      $('#trophy').text('You Won Press Start to Play agian');
      break;
    default:
      $('#trophy').text('Wrong Choose Another Color');
  }
});
$('#blue').click(function () {
  console.log(number);
  switch (number) {
    case number = 1:
      $('#trophy').text('You Won Press Start to Play agian');
      break;
    default:
      $('#trophy').text('Wrong Choose Another Color');
  }
});
});
