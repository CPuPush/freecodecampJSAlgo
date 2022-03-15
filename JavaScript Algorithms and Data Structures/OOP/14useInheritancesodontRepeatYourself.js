//There's a principle in programming called Don't Repeat Yourself (DRY)
// Bird.prototype = {
//     constructor: Bird,
//     describe: function() {
//       console.log("My name is " + this.name);
//     }
//   };
  
//   Dog.prototype = {
//     constructor: Dog,
//     describe: function() {
//       console.log("My name is " + this.name);
//     }
//   };

// //can be edit
// function Animal() { 

// };

// Animal.prototype = {
//   constructor: Animal, 
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };
// // //sice animal includes the describe method, we can remove it from Bird and Dog
// Bird.prototype = {
//     constructor: Bird
//   };
  
//   Dog.prototype = {
//     constructor: Dog
//   };

function Cat(name) {
    this.name = name;
}
function Bear(name) {
    this.name = name;
}
function Animal() { }  
Animal.prototype = {
    constructor: Animal,
    eat: function(){
        console.log("nom nom nom");
    }
};
Cat.prototype = {
    constructor: Cat,
}; 
Bear.prototype = {
    constructor: Bear,
};


// let bears = new Bear("Joko");
// console.log(bears.numLegs);
Bear.prototype = Object.create(Animal.prototype);
let gagas = new Bear("gigos");
console.log(gagas.name);

 