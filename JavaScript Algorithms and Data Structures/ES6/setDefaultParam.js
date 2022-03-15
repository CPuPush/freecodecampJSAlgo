//ES6 introduce default parameter
const greeting = (name = "Anonymous")=> "Hello " + name;

console.log(greeting());

//challenge
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
console.log(increment(2));
console.log(increment(2,3));

