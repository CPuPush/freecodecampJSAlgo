/**
 * functional programming is a style of programming  where solution are simple, isolated functions,
 * without any side effects otside of the function scope
 * INPUT-> PROCESS -> OUTPUT
 */
/**
 * functional programming is about:
 * 1. Isolated function -there is no depedence on the state of program,
 * which includes flobal variable that are subject to change
 * 2. Pure functions- the same input always fives the same output
 * 3. functions with limited side effect - any changes, or mutations, to the state of the 
 * program outside the function are carefuilly controled
 */
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC.length);
// Only change code above this line