function rot13(str) {
    const Guidelines = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = [];
    for(let i = 0;i<str.length;i++){
        let test = Guidelines.indexOf(str[i])+1;
        console.log(test);
        if(test >= 14){
            result.push(test-13);
        }    
        else if(test > 0 && test < 14){
            result.push(test+13)
        }
        else if(test == 0){
            result.push(test)
        }
    }
    let container = [];
    console.log(result);
    for(let j=0;j<result.length;j++){
        if(result[j]<=0){
            container.push(" ")
        }else{
        container.push(Guidelines[result[j]-1]);
        }   
    }
    return container.join("");
  }
console.log(rot13("SERR CVMMN!"));