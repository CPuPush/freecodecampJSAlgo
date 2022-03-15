const doubler=(con)=> con*2;
console.log(doubler(3));
//if an arrow functoin has a single parameter, the parentheses enclosing the parameter may be ommited
const doublerCopy = con => con * 2;
console.log(doublerCopy(3));

const multiplier= (item, multi) => item * multi;
console.log(multiplier(3,2));

//challenge
const myConcat = (arr1, arr2) => arr1.concat(arr2);
  
  console.log(myConcat([1, 2], [3,4,5]));
