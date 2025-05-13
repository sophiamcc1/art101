/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

Requirements: jQuery must be loaded for this script to work.
Author: Sophia McClanahan
Date: 12 May 2025
*/

//add button to challenge section
$("#Challenge").append("<button id='button-Challenge'>Make Special</button>");

//add a click listener to the challenge button
$("#button-Challenge").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});


//add button to problem section
$("#problems").append("<button id='button-problems'>Make Special</button>");

//add a click listener to the problem button
$("#button-problems").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});


//add button to refkection section
$("#reflection").append("<button id='button-reflection'>Make Special</button>");

//add a click listener to the result button
$("#button-reflection").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
});


//add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

//add a click listener to the results button
$("#button-results").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});