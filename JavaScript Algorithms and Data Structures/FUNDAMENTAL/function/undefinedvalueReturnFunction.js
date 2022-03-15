//Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
    sum = sum + 5;
}

// Only change code above this line

console.log(addThree());
console.log(addFive());

/**
 * when function doesn't have a return statement, when i call it, the function processes the inner code but the
 * retured value is undefined
 */