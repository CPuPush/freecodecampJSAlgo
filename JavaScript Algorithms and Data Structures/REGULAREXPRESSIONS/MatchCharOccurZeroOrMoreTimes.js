//using * for match char occure
// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/ig; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result);
/**
 * use + sign to look for character that occur one or moretimes
 * there's also an option that matches character that occur zero or more times
 * the char to do this is the asterisk or star: *
 */