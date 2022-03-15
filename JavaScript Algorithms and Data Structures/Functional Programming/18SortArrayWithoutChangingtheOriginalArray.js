//side effect is change the original array when using sort()
//to avoid this is first concatenate an empty array to the one being sorted
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
    const localArr = arr.slice();

    return localArr.sort((a, b)=>{
        return a >= b ? 1 : -1;
    });
  // Only change code above this line
}


console.log(nonMutatingSort(globalArray));