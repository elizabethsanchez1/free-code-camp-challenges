let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
//above code searches the for the word "Waldo" in the string above
let result = waldoRegex.test(waldoIsHiding);