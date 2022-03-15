/**
 * its we can search for a literal pattern with some flexibility with character classes
 */
///b[aui]f/ those are example
//challenge
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aiuoe]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result);