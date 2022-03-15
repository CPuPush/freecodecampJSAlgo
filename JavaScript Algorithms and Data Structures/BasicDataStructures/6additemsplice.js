// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;
/**
 * the third parameter in array add to the array in the same index with param1 and 2
 */
// numbers.splice(startIndex, amountToDelete, 13, 14);
// console.log(numbers);
//challemge
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2, "DarkSalmon", "BlanchedAlmond");
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));