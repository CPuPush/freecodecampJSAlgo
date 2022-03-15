
// const person = {
//     name : "Taylor",
//     sayHello: function(){
//         return `my name is ${this.name}`;
//     }
// };
// console.log(person);
//write concise Declaration
const person = {
    name : "Taylor",
    sayHello(){
        return `my name is ${this.name}`;
    }
};
console.log(person);

//challange
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear){
        this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);