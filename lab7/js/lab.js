// index.js - Functions
// Author: Sophia McClanahan
// Date: 4 May 2025

function sortUserName () {
   
    var userName = window.prompt("Please tell me your name so I can fix it!");
    console.log("userName =", userName);

    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
  
  return nameSorted;

}

document.writeln("There, that's better: ", sortUserName(), "</br>");