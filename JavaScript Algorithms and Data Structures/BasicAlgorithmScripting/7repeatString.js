function repeatStringNumTimes(str, num) {
    let strr = ""
    if(num>=0){
        for(let i = 0;i < num;i++){
            strr += str;
        }
    }  
    return strr  
}
console.log(repeatStringNumTimes("abc", 3));