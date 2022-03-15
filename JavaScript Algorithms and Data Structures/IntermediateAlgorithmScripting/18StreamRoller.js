function steamrollArray(arr, result = []) {
    
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i]);
        if(Array.isArray(arr[i])){
            steamrollArray(arr[i], result);
        }else{
            console.log(arr[i]);
            result.push(arr[i]);
        }
    }
    return result;

}
console.log(steamrollArray([1, [2], [3, [[4]]]]));

//arr.flat(infinity) should done, but we cannot use flat