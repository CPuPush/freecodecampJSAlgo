//in previos challenge
/**
 * bird.name = "DUMMI";
 * we can acces and changed outside of bird's definition
 * think about password and bank acout being esily changeable by any part of your code base
 * That cound cause a lot of issue
 * 
 * the simple way to make this public property to private is by createing a variable within the constructor
 * function. this changes scope of that variable to be  within the constructor function versus available globally.
 * this way, the variable can only accessed and changed by method also within the constructor function.
 */
//  function Bird() {
//     let hatchedEgg = 10;
    
//     //this is make hachedEgg to private by creating a variable function
//     this.getHatchedEggCount = function() { 
//       return hatchedEgg;
//     };
//   }
//   let ducky = new Bird();
//   console.log(ducky.hatchedEgg); // hatchedEg cannot acces becase get variable hatchedEgg had include to function 
//   console.log(ducky.getHatchedEggCount());// here getHatchedEggCount is privileged method

  //challenge
  function Bird() {
    let weight = 15;
    
    this.getWeight = function() { 
        return weight;
    };
  }
  /**
   * Change how weight is declared in the Bird function so it is a private variable. 
   * Then, create a method getWeight that returns the value of weight 15.
   */
 let bird = new Bird();
console.log(bird.getWeight());