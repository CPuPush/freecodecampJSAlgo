function rot13(str) {
    const Guidelines = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';
    for(let i =0;i<str.length;i++){
        if(Guidelines.indexOf(str[i]) === -1){
            result += str[i];
        }
        else{
            let indexAwal  = Guidelines.indexOf(str[i])
            let indexAkhir = (indexAwal + 13) % 26;
            result += Guidelines[indexAkhir];
        }
    }
    return result;
}
console.log(rot13("SERR PBQR PNZC!#^"));