// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4BlackTeamFCC = getTea(prepareGreenTea, 27);
const tea4GreenTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
/**
 * the function that can be assigned to a variable, passed into another function,
 * or returned from another function just like any other normal value, are called first class function
 * , In JS all functions are first class function
 * 
 * the function that take a ufnction as an argument,or return a function as a return value are called higher order function.
 * 
 * when function are passed in to or returned from another functoni, then those function which were passed in or return 
 */