/**
 * The last challenge was a step closer to functional programming principles, 
 * but there is still something missing.
 * 
 * we didn't alter the global function, but the function incrementer would not work without
 * the flobal variable fixedValue being there
 * 
 * 
 * Another principle of functional programming is to always declare your dependencies explicitly.
 * this means if a function depend on a variable or object being present, then pass that variable
 * or objet directly into the function as an argument. 
 * the good things from this principle is easier to test. 
 * we know exactly what input it takes, and it won't depend on anything else in your program
 */

//challenge
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValues) {
    return fixedValues + 1;

  // Only change code above this line
}
console.log(incrementer(4));