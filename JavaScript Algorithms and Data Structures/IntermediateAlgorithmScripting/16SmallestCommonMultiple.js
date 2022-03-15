function kpk(a,b){
    return (a / fpb(a, b) * b);
}

function fpb(a, b){
    if(b==0){
        return a;
    }else {
        return fpb(b, a % b);
    }
}
function smallestCommons(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    // console.log(min);
    // console.log(max);
    for(let i = min;i<=max;i++){
        min = kpk(i, min);
        console.log(min);
    }
    return min;
}
console.log(smallestCommons([4,5]));

// 1,2,3,4,5 