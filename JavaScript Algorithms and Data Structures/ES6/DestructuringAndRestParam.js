//Use Destructuring Assignment with the  rest parameter to reassign array elements
// const [a,b, ...arr] = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);

//the rest element only workd correctly as the last variable in the list
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
