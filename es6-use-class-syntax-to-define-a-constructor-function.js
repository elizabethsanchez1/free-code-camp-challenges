function makeClass() {

  "use strict";

  /* Alter code below this line */

class Vegetable {

  constructor (carrot) {

    this.carrot = carrot;

  }

}

 

  /* Alter code above this line */

  console.log(Vegetable);

 

  return Vegetable;

}

const Vegetable = makeClass();

const carrot = new Vegetable('carrot');

console.log(carrot.name); // => should be 'carrot'

 