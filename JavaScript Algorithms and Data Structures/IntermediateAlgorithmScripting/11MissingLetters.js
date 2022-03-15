function fearNotLetter(str) {
    const awal = str.charCodeAt(0);
    const akhir = str.charCodeAt(str.length-1);
    let container1 = []
    for(let i = awal; i<=akhir;i++){
        container1.push(i);
    }
    console.log(container1);
    let container2 = [];
    for(let j = 0;j<str.length;j++){
        container2.push(str.charCodeAt(j));
    }
    console.log(container2);
    let result =  container1.filter((el)=> !container2.includes(el));
    if(result.length>0){
        return String.fromCharCode(result)
    }else{
        return undefined;
    }

    
}
console.log(fearNotLetter("abce"));  
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));