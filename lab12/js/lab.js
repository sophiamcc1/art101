/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Sophia McClanahan
   Date: 22 May 2025
*/

// given a number, return a Spider-Man variant

function getSpider(num) {
    // get the remainder when divided by 4
    let remainder = num % 4;
    let str = "";
    // assign Spider-Man variants with descriptions based on remainder 
    if (remainder == 0) {
        str = "Peter B. Parker: You're cynical and sarcastic!";
    } else if (remainder == 1) {
        str = "Spider-Noir: You're dark and brooding!";
    } else if (remainder == 2) {
        str = "Miguel O'Hara: You're stubborn and resentful!";
    } else if (remainder == 3) {
        str = "Miles Morales: You're kind and compassionate!";
    }
    return str;
}

// attach click handler to submit button
$("#button").click(function() {
    // get the value in the #input text box, assign to a variable name
    let name = $("#input").val()
    console.log("name");
    // get the length of the name
    let nameLength = name.length;
    console.log("nameLength");
    // get the spider
    let spider = getSpider(nameLength);
    console.log("house");
    // add spider to output div
    $("#output").html("<h1>" + house + "<h/1>");
})