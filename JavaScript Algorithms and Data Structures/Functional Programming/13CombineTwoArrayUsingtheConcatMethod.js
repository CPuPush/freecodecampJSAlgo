/**
 * concatenation means join items end to end, JS offers the concat method for both strings and arrays that work in the same way
 * it return new array and does not mutate either of the original arrays
 */
 function nonMutatingConcat(original, attach) {
    // Only change code below this line
    return original.concat(attach);
  
    // Only change code above this line
}
  
const first = [1, 2, 3];
const second = [4, 5];
console.log(  nonMutatingConcat(first, second));