/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Sophia McClanahan
   Date: 5 June 2025
*/

$(document).ready(function() {
  $("button").click(function() {
    // I ran into several issues with my code and asked WesBot and ChatGPT for help. I was told to edit the URL line
    const proxyUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://xkcd.com/info.0.json");

    $.ajax({
      url: proxyUrl,
      type: "GET",
      dataType: "json"
    })
    .done(function(response) {
      const data = JSON.parse(response.contents);

      let title = data.title;
      let date = `Comic #${data.num}`;
      let desc = data.transcript || "No transcript available.";
      let imageUrl = data.img;

      $("#output").html(`<h2>${title}</h2>`);
      $("#output").append(`<img src='${imageUrl}' alt='XKCD Comic' />`);
      $("#output").append(`<p class='date'>${date}</p>`);
      $("#output").append(`<p class='desc'>${desc}</p>`);
    })
    .fail(function(xhr, status, error) {
      console.error("AJAX Error:", error);
      $("#output").html("<p style='color:red;'>Failed to load comic. Try again later.</p>");
    });
  });
});
