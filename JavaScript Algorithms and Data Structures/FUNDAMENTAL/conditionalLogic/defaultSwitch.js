function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
 console.log(switchOfStuff("a"));
 console.log(switchOfStuff("b"));
 console.log(switchOfStuff("c"));
 console.log(switchOfStuff("d"));
 console.log(switchOfStuff(4));
  

//   you may not be able to specify all possible values as case statement
// instead
// we can add the default statement which will be executed of no matching case statement are found
// it's like a final else