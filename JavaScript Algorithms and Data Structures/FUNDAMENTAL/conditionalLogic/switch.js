function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
   switch(val){
       case 1:
           answer = "alpha";
           break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
   }  
    // Only change code above this line
    return answer;
  }
  
console.log(caseInSwitch(1));
console.log(caseInSwitch(3));


/**
 * case value are tested with strict equality(===). the break tells JS to stop executing statements
 */