//^ is to negated character set ex //[^au]->tha match all char that are not a and u
let quoteSample = "3 blind mice.";
let myRegex = /[^aiueo0-9]/ig; // Change this line
let results = quoteSample.match(myRegex); // Change this line
console.log(results);

