const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
const evenNum = arr.filter((num) => {
  if(num % 2 == 0) {
    return num
  }
  //console.log("even:", evenNum);
});

const squaredIntegers = evenNum.map(newArray => Math.pow(newArray, 2)) 
  //console.log("even:", evenNum);
  //return Math.pow(newArray, 2)

 //change code above this line
 
  return squaredIntegers;

}
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);