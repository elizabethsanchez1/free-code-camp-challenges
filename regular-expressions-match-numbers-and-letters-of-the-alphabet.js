let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
// finds letters h-s and numbers 2-6
let result = quoteSample.match(myRegex); // Change this line

console.log(result);