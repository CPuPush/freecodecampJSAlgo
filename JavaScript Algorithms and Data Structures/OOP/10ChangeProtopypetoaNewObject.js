// Bird.prototype.numLegs = 2;
// Bird.prototype.eat = function() {
//     console.log("nom nom nom");
//   }
  
//   Bird.prototype.describe = function() {
//     console.log("My name is " + this.name);
//   }
/**
 * a more efficient way is to set the prototype to a new object that already contains the properties.
 * this way  the properties are added all at once:
//  */
//  Bird.prototype = {
//     numLegs: 2, 
//     eat: function() {
//       console.log("nom nom nom");
//     },
//     describe: function() {
//       console.log("My name is " + this.name);
//     }
//   };
//challenge
function Dog(name) {
    this.name = name;
  }
  
Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function(){
        console.log("nom nom nom");
    },
    describe: function(){
        console.log("My Name is " + this.name);
    }
};
