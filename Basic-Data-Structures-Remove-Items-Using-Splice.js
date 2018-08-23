function sumOfTen(arr) {

  console.log("arr:", arr);

  // change code below this line

let newArray = arr.splice(2,2);

 

  // change code above this line

  return arr.reduce((a, b) => a + b);

}

 

// do not change code below this line

console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

// starts from second index of array and removes 2 items