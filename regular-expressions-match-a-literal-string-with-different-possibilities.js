let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
//above line searches the for the pets above: "dog,cat,bird,fish"
let result = petRegex.test(petString);