//Bird.prototype = Object.create(Animal.prototype);
//in a way, the recipe for Bird now includes all the key "ingredients" from Animal.
//let duck = new Bird("Donald");

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { 
}

// Only change code below this line
//modify the code so that instance of Dog inherit from Animal

Dog.prototype = Object.create(Animal.prototype);
let gugs = new Dog();
//now dog inherit from supertype Animal

//Reset an Inherited COnstructor Property
console.log(gugs.constructor);
//this output Function: Animal
//but gugs and all intance of Dog should show that they were constructed by Dog and not Animal
// to do so, we cam manually set the constructor property of Dog to The Dog object
Dog.prototype.constructor = Dog;
console.log(gugs.constructor);
//now the output is Function Dog. int mean the gugs is inherit from supertype Dog not supertype Animal 

