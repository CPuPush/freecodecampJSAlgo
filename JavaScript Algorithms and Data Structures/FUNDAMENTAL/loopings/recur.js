//this is using for loop

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
console.log(multiply([1,2,3], 3));

//this is usimg recursion
/**
 * notice that multiply(arr, n)  == multiply(arr, n-1) * arr[n-1]
 */
function multipli(arr, n){
    if(n <=0){
        return 1;
    }
    else{
        return multipli(arr, n-1) * arr[n-1];
    }
}
console.log(multipli([1,2,3], 0));
