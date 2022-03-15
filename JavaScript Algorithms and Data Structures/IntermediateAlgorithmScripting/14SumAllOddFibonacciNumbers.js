function sumFibs(num) {
    let f0=0, 
    f1=1,
    next;
    let container=[];
    for(let i = 1;i<=num;i++){
        if(f1%2 == 1){
            container.push(f1);
        }
        next = f0+f1;
        f0=f1;
        f1=next;
    }
    return container.filter((el)=> el <= num).reduce((acc,el)=>acc+el,0);
}
console.log(sumFibs(10));
