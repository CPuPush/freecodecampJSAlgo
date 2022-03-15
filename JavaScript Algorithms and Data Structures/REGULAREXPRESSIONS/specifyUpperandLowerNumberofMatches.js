let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
// let result = multipleA.test(A4);
multipleA.test(A2);
// console.log(result);

// challenge
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);