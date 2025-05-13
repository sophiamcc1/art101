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
    $("#Challenge").toggleClass("special");
});


//add button to problem section
$("#Problems").append("<button id='button-Problems'>Make Special</button>");

//add a click listener to the problem button
$("#button-Problems").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#Problems").toggleClass("special");
});


//add button to result section
$("#Results").append("<button id='button-Results'>Make Special</button>");

//add a click listener to the result button
$("#button-Results").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#Results").toggleClass("special");
});