let arr = [1.5, 2.56, 5.1, 12.33];
function pembulatan(arr){
    return arr.map(acc=>Math.round(acc))
}
console.log(pembulatan(arr));