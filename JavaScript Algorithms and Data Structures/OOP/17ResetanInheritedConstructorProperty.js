// //Reset an Inherited COnstructor Property
// console.log(gugs.constructor);
// //this output Function: Animal
// //but gugs and all intance of Dog should show that they were constructed by Dog and not Animal
// // to do so, we cam manually set the constructor property of Dog to The Dog object
// Dog.prototype.constructor = Dog;
// console.log(gugs.constructor);
// //now the output is Function Dog. int mean the gugs is inherit from supertype Dog not supertype Animal 
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor);
console.log(beagle.constructor);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
console.log(duck.constructor);
console.log(beagle.constructor);
