//using g flag is to search or extract pattern more than once
let testStr = "Repeat, Repeat, Repeat";
let regex = /Repeat/g;
console.log(testStr.match(regex));

//challenge
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);