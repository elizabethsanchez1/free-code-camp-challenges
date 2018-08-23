function mixedNumbers(arr) {

  console.log("arr:", arr);

  // change code below this line

  arr.push(7, 'VIII', 9);

  arr.unshift('I', 2, 'three');

 

  // change code above this line

  console.log("result:", arr);

  return arr;

}

 

// do not change code below this line

console.log(mixedNumbers(['IV', 5, 'six']));

//push adds new items to end of array

// unshift adds new items to beginning of array

 