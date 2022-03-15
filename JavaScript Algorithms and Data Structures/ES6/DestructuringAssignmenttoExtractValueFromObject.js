//that is mean for neatly(rapi) assigning values taken directly from an object
const objectEx = {
    name: "Lucas",
    age: 23
};
//old way
// let name = objectEx.name;
// let age = objectEx.age;
// console.log(name);
// console.log(age);

//new assignment the value from object by ES6
const {name, age} = objectEx;
console.log(name);
console.log(age);
 //challenge

const HIGH_TEMPERATURES = {
    yesterday : 75,
    today : 77,
    tomorrow : 80
};
//only change code below this line
const {today,tomorow} = HIGH_TEMPERATURES;
//only change code above this line