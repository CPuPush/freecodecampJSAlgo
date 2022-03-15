//Use the some Method to Check that Any Elements in an Array Meet a Criteria
/**
 * the some method works with array to check if any element passes a particular test
 * it returns a boolean true uf any of the value meet the criteria
 * false if not
 */
//ex true if any numbers array is less than 10
const number = [10,40,3,20];
console.log(number.some(acc=>{
    return acc < 10;    
}));
//challenge
function checkPositive(arr) {
    // Only change code below this line
    const arrs = arr.slice();
    return arrs.some(acc=>{
        return acc > 0;
    });
  
    // Only change code above this line
  }
  console.log(checkPositive([1, 2, 3, -4, 5]));
