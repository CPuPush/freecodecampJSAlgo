function uniteUnique(arr) {
    // const arrs = arr.flat();
    // return Array.from(new Set(arrs));
    return [...new Set(arr.concat(...arguments))];

}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/**
 * arr.flat()
 * make all sub arrays in one array
 * 
 * set() -> create a set which clears any duplicates since it's a regular set and not a multiset
 */