/**
 *  JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, 
 * then the number of items to remove.
 *  If the second argument is not provided, the default is to remove items through the end. However, 
 * the splice method mutates the original array it is called on.
 */
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

// console.log(cities.splice(2,2));
// console.log(cities);
/**
 * using the slice not splice method helps to avoid any array-mutating side effects
 */
 function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);
    // Only change code above this line
  }
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

  console.log(nonMutatingSplice(inputCities));