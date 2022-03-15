/**
 * we can show relationship with the isPrototypeOf. to check if object inherits its prototype frim the constructor function
 */
//Bird.prototype.isPrototypeOf(duck);)(Bird is a function constructor)(duct is new instance from Birn Object)
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
Dog.prototype.isPrototypeOf(beagle);
