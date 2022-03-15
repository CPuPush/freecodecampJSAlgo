let shortHand = /\W/;
let numbers = "42%";
let sentence = "!Coding";
console.log(sentence.match(shortHand));
sentence.match(shortHand);

//challenge
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);