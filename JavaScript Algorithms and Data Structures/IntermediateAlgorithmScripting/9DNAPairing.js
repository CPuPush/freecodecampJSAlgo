function pairElement(str) {
    let container = []
    for(let i = 0;i<str.length;i++){
        let Cont = str[i];
        let con2 =[];
        if(Cont == 'A'){
            con2.push(Cont, "T")
        }else if(Cont == 'T'){
            con2.push(Cont, "A")
        }else if(Cont == 'G'){
            con2.push(Cont, 'C')
        }else if(Cont == 'C'){
            con2.push(Cont, 'G')
        }
        container.push(con2);
    }
    return container;
}
console.log(pairElement("GCG"));
// console.log(pairElement("TTGAG"));
  