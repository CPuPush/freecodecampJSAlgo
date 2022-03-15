// function Bird(name) {
//     this.name = name;  //own property
//   }
  
//   Bird.prototype.numLegs = 2; // prototype property
  
//   let duck = new Bird("Donald")

//   let ownProps = [];
//   let prototypeProps = [];
// for(let property in duck){
//     if(duck.hasOwnProperty(property)){
//         ownProps.push(property);
//     }else{
//         prototypeProps.push(property);
//     }
// }
// console.log(ownProps);
// console.log(prototypeProps);
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
for(let property in beagle){
    if(beagle.hasOwnProperty(property)){
        ownProps.push(property);
    }else{
        prototypeProps.push(property);
    }
}