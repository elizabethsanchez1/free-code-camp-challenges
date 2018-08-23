let hello = "   Hello, World!  ";

let wsRegex = /^\s*(\S.*\S)\s*$/; // Change this line

let result = hello.replace(wsRegex, '$1'); // Change this line

console.log(result);

// removes white space from the beginning and the end of the string without using trim()