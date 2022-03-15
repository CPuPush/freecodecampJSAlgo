function checkObj(obj, checkProp) {
    // Only change code below this line
    let test = obj.hasOwnProperty(checkProp);
    if(test == true){
        return obj[checkProp];
    }
    else{
        return "Not Found";
    }
    // Only change code above this line
}
// test code
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));



//useful to check if the property of a given object exists or not.
//.hasOwnProperty(property name here)
//myObj.hasOwnProperty("middle");