const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    //increment can be achieved by setting parameter value to 1 or 
    //value = value || 1;
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN