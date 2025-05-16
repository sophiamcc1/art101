/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Sophia McClanahan
   Date: 15 May 2025
*/

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 150;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
 
  // Get a random starting index to nearest boundary
  let randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    while (randStart > 0 && text[randStart - 1] !== ' ') {
    randStart--;
  }
  // Set end index and adjust to nearest boundary 
  return text.slice(randStart, randStart + randLen);
  while (randStart > 0 && text[endIDx] !== ' ') {
    endIDx++;
  }

//Generate the random text, breaking it at nearest boundary
let selectedText = text.slice(randStart, endIDx).trim();

//Capitalize the first letter of the selected text
return selectedText = text.charAt(0).toUpperCase() + selectedText.slice(1);
}


$("#action").click(
    function() {
        // get new fake dialogue using above function
        const newText = generateRandomText();

        //append output to new div with class called "text" that takes the generated text from the function "generateRandomText" and puts it in a <p>
        $("#output").append('<div class="text"> <p>' + newText + '</p> </div>');
    }
);

