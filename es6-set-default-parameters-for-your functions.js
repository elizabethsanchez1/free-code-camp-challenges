const increment = (function() {
  console.log("increment:",increment);
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7

console.log(increment(5)); // returns NaN : incremented by 1 returns 6