// inES5, we usually define a constructor function and use the new keyword to instantiate an object
// not support in ES6
// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
//   }
//   var zeus = new SpaceShuttle('Jupiter');
// console.log(zeus);
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');
  console.log(zeus);
// class keyword declares a new funtion to which a constructor is added. 
//the constructor method is a special method for creating and initializing an object created with a class
//challenge
class Vegetables{
    constructor(name){
        this.name = name;
    }
}
const carrot  = new Vegetables('carrot');
//adding new property
carrot.number = 23;
console.log(carrot["name"]);
console.log(carrot);

