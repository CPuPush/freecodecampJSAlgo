function sumAll(arr) {
    let [a,b] = [...arr];
    let container=0;
    if(a<b){
        for(let i = a;i<=b;i++){
            container+=i;
        }
    }
    else if(b<a){
        for(let i = b;i<=a;i++){
            container+=i;
        }
}
    return container;

}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([4, 4]));