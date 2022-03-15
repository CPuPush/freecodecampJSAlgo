function sumPrimes(num) {
    let container = [];
    for(let i = 1;i<=num; i++){
        let flag = 0;
        for(let j = 2; j < i;j++){
            if(i%j==0){
                flag=1;
                break;
            }
        }
        if(i > 1 && flag == 0){
            console.log(i);
            container.push(i);
        }
    }    
    return container.filter(el=> el <=num)
    .reduce((acc, el)=>acc+el);
}
console.log(sumPrimes(10));