function diffArray(arr1, arr2) {
    const arrOne = arr1.filter((el)=> !arr2.includes(el));
    const arrTwo = arr2.filter((el)=> !arr1.includes(el));
    /**
     * filter check element in arr1 with the name become el. if in arr2 inlcudes element arr1 skip
     */
    return [...arrOne, ...arrTwo];
  }
  

console.log(diffArray([1, 2, 3, 6, 7, 8], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 6, 7, 8]));