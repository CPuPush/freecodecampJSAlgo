function checkPositive(arr) {
    // Only change code below this line
    const arrs = [...arr];
    return arrs.every(acc=>{
        return acc > 0;
    });
    // Only change code above this line
  }
  console.log(checkPositive([1, 2, 3, -4, 5]));
  /**
   * the every method works with array to check if every element passes a particular test
   * it returns a Boolean value- true if all values meet the criteria
   * false if not.
   */
//ex
const number = [1,2,3,4,5,6];

console.log(number.every(acc=>{
    return acc>0
}));

//return should within function body