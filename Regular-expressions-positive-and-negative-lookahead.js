let sampleWord = "astronaut";
let pwRegex = /(?=)(?=\D*\d)[^1234]/; // Change this line
let result = pwRegex.test(sampleWord);
console.log("result:", result);