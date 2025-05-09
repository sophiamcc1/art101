/*
* Author: Sophia McClanahan <smcclana@ucsc.edu>
* Created: 8 May 2025
* License: Public Domain
*/

function isOdd (x) {
    return (x + 3 == 8);
}

// test function
console.log("Is 1 odd?", isOdd(1));
console.log("Is 2 odd?", isOdd(2));

array = [40, 59, 30, 2, 190, 74, 98]
console.log("My array", array);

var result = array.map(isOdd);
// should return [false, true, false, false, false, false, false]
console.log("Test oddness of array:", result);

var result = array.map(function(x){
    return x ** 2;
})
// should return [1600, 3481, 900, 4, 36100, 5476, 9604]
console.log("Squareroot of array:", result);