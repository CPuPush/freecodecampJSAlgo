function rot13(str) {
    const Guidelines = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';
    for(let i=0;i<str.length;i++){
        let con = [];
        console.log(Guidelines.indexOf(str[i]));
        if(Guidelines.indexOf(str[i]) >= 13){
            con.push(Guidelines[Guidelines.indexOf(str[i])-13]);
        }
        else if((Guidelines.indexOf(str[i])) < 0){
            con.push(str[i]);
        }
        else if((Guidelines.indexOf(str[i])<13)&&((Guidelines.indexOf(str[i])<13)>=0)){
            con.push(Guidelines[Guidelines.indexOf(str[i])+13])
        }
        result += con;
    }
    return result;
} 
console.log(rot13("SERR PBQR PNZC?!"));