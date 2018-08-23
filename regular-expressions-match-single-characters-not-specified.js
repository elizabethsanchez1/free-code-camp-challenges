let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^1-4]/gi; // Change this line
let result =quoteSample.match(myRegex);
console.log(result);
// matches all characters that are not a number or a vowel.

