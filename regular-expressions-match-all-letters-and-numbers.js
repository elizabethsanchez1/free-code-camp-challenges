let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log("result:", result);
// counts the number of alpanumberic characters can be different strings