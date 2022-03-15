/**
 * split method splits a string into an array strings. it takes an argument for the delimiter
 */
 const str = "Hello World";
 const bySpace = str.split(" ");
 
//  console.log(bySpace);
 const otherString = "How9are7you2today";
 const byDigits = otherString.split(/\d/);//regex using \d is search number
//  console.log(otherString);
//  console.log(byDigits);
 //challenge
 function splitify(str) {
    // Only change code below this line
    const strs = str.split(/\W/);
    //its equivalent to /[^A-Za-z0-9]/
    return strs;
    // Only change code above this line
  }
  
  
  console.log(splitify("Hello World,I-am code"));