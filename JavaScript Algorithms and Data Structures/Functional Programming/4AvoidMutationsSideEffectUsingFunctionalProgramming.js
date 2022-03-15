/**
 * recall that functional programming, changing or altering this is called mutation
 * and the outcome is called a side effect. A function ideally, should be a pure function
 * meaning that it does not couse any side effect.
 * 
 */
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
    let fixedValues = fixedValue + 1;
    return fixedValues;

  // Only change code above this line
}
console.log(incrementer());
/**
 * purpose of this code is not change the fixedValue, cause it called mutation
 */