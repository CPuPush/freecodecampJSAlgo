/**
 * slice method return and copy of certain elements of an array. it
 * can take two arguments.
 * first is index where to begin slice, 
 * second is the index for where to end the slice
 * slice method does not mutate the orginal array, but returns a new one
 */
// const arr = [1,2,3,4,5];
// const newArr = arr.slice(1,3);//first index second not indexing but begin from  the start
// console.log(newArr);
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    const arr = [...anim];
    const slices = arr.slice(beginSlice, endSlice);
    return slices;
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

  console.log(sliceArray(inputAnim, 1, 3));