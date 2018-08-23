function popShift(arr) {

  console.log("arr:", arr);

  let popped = arr.pop(); // change this line

  let shifted = arr.shift(); // change this line

  console.log("result:", arr);

  return [shifted, popped];

 

}

 

// do not change code below this line

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// pop() removes item from end of array

// shift() removes item from beginning