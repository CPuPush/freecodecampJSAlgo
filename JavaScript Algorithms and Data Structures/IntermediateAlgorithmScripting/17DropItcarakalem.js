function dropElements(arr, func) {
    while(!func(arr[0])){
        arr.shift();
    }    
    return arr;
}
/**
 * we can use array shift for delete array from beginning
 */
console.log(dropElements([1, 2, 3], 
    function(n) {return n < 3; }));
console.log(
    dropElements([1, 2, 3, 9, 2],
         function(n) {return n > 2;})
);