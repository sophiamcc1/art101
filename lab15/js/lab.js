/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Sophia McClanahan
   Date: 2 June 2025
*/

const ajaxObj = {
  url: "https://yesno.wtf/api",
  // data: {},
  type: "GET",
  dataType: "json"
}

$("#activate").click(function () {
  console.log("click!");
  
  $.ajax(ajaxObj)
  
  .done(function(data) {
    console.log("Success!");
    console.log(data);
    
    let answer = data.answer;
    let imgURL = data.image;
    let imageHTML = "<img src = '" + imgURL + "'>";
    
    $("#output").html("<h1>" + answer);
    $("#output").append(imageHTML); 
  })
  
  .fail(function( xhr, status, errorThrown ) {
    console.log(errorThrown + " Status:" + status);
  });
})