function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
/**
 * add all neccesary code so Dog object inherits from Animal
 * and the Dog's prototype constructor is set to Dog.
 * then add a Bark() method to the Dog object so that beagle can both eat() and bark()
 */
// Only change code below this line
Dog.prototype  = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
    console.log("Woof!");
}
let beagle  = new Dog();
console.log(beagle.eat());
console.log(beagle.bark());


// Only change code above this line
