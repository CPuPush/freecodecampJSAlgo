/**
 * join method is used to join the elements of an array together to create string
 * it takes an argument for the delimiter that is used to separate the array element in the string
 */
//ex
const arr = ["happy", "Coding"];
const conArr = arr.join(" ");
// console.log(conArr);

function sentensify(str) {
    // Only change code below this line
    const strFirst = str.split(/\W/);
    const joinString = strFirst.join(" ");
    return joinString;
    // Only change code above this line
  }
console.log(sentensify("May-the-force-be-with-you"));