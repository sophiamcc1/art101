/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Sophia McClanahan
   Date: 26 May 2025
*/

$("#action").click(function(){
    // credit to W3Schools
    var outputElement = document.getElementById('output');

    var data = fizzBuzzBoom();

    // credit to Wesbot
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += '<p>' + data[i] + '</p>';
    }
    outputElement.innerHTML = html;
});

function fizzBuzzBoom () {
    const logArray = [];
    for (i = 1; i <= 200; i++) {
      if (i % 15 == 0) {
        logArray.push("FizzBuzz");
      } else if (i % 3 == 0) {
        logArray.push("Fizz");
      } else if (i % 5 == 0) {
        logArray.push("Buzz");
      } else if (i % 7 == 0) {
        logArray.push("Boom");
      } else {
        logArray.push(i);
      }
    }
    return(logArray);
}