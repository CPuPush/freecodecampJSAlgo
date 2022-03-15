function dex(x,y){
    let outs = [];
    for(let i = 0; i < x; i++){
        let ins = [];
        for(let j = 0; j < y; j++){
            ins.push(0);
        }
        outs.push(ins);
    }
    return outs;
}
console.log(dex(3,2));