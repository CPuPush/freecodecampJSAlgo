function arrayCountdown(n){
    if(n < 1){
        return [];
    }else{
        let countArray = arrayCountdown(n-1);
        countArray.push(n);
        return countArray;
        
    }
}
console.log(arrayCountdown(2));

function countdown(n){
    if(n < 1){
        return [];
    }else{
        let arrays = countdown(n-1);
        arrays.unshift(n);
        return arrays;
    }
}
console.log(countdown(5));
