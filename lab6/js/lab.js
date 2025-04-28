// index.js - Arrays and Objects
// Author: Sophia McClanahan
// Date: 28 April 2025

// Define Variables
myTransport = ["Toyota", "bus", "walk"];

// Create an object for my main ride
myMainRide = {
  make: "Toyota",
  model: "Corolla",
  color: "white",
  year: 2024,
  age: function() {
    return 2025 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '/t'), "</pre>");