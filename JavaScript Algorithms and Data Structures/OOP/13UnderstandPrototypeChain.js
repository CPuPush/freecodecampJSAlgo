function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
let test = Object.prototype.isPrototypeOf(Dog.prototype);
console.log(test);
function Bird(name) {
    this.name = name;
  }
  console.log(typeof Bird.prototype);//result object
  //penjelasan object,property
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
/**
 * the hasOwnProperty method is defined in Object.prototype, whic can be access by Bird.prototype,
 * which can then be acces by duck. this is an example of the prototype chain. Bird is the supertype for duck
 * while duck is subtype. Object is supertype fro both bird and duck. Object is supertype for all object in JS
 * therefore, any object can use the hasOwnProperty method.
 */