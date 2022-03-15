function truthCheck(collection, pre) {
    let result = true;
    collection.forEach(el=>{
        let check = el.hasOwnProperty(pre);
            if(!check){
                result=false;
            }else if(el[pre]==""||Number.isNaN(el[pre])||el[pre]==0||el[pre]==null){
                result = false;
            }
    });
    return result;
}
console.log(truthCheck(
    [{"user": "Tinky-Winky", "sex": "male"}, 
    {"user": "Dipsy", "sex": "male"}, 
    {"user": "Laa-Laa", "sex": "female"}, 
    {"user": "Po", "sex": "female"}], 
    
    "sex"));
 console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
 console.log(
    truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")
 );
 console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));