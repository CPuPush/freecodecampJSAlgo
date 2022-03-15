/**
 * This and the next challenge will cover how to reuse 
 * the methods of Animal inside Bird and Dog without defining them again.
 */
 function Animal() { }
 Animal.prototype.eat = function() {
   console.log("nom nom nom");
 };
 let animal = new Animal();

 /**
  * there are some disadvantages when using this syntax for inheritance, which are too complex
  * for the scope ofthis challenge. instead, here's an alternative approoach without those disadvantage
  */
let animals = Object.create(Animal.prototype);
/**
 * Object.create(obj) creates a new object and set obj as the new object prototype. 
 * Recal that the prototype is like the recipe(resep) for createing object.
 * by setting the prototype of animal tobe prototype of Animal. youre effectively giving the animal
 * instance the same recepe as any other instance of Animal
 */
 function Animal() { }

 Animal.prototype = {
   constructor: Animal,
   eat: function() {
     console.log("nom nom nom");
   }
 };
 
 // Only change code below this line
 
 let duck = Object.create(Animal.prototype); // Change this line
 let beagle = Object.create(Animal.prototype); // Change this line