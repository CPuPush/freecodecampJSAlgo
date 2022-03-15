function uniteUnique(arr) {
    let args = [...arguments];
    let container = [];
    //looping sub array
    for(let i = 0; i<args.length;i++){
        console.log(args[i]);
        //looping element subarray
        for(let j=0;j<args[i].length;j++){
            if(!container.includes(args[i][j])){
                container.push(args[i][j]);
            }
        }
    }
    return container;

}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/**
 * arr.flat()
 * make all sub arrays in one array
 * 
 * set() -> create a set which clears any duplicates since it's a regular set and not a multiset
 */