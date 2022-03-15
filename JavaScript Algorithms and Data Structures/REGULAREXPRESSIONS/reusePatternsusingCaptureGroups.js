// let repeatStr = "row row row your boat";
// let repeatRegex = /(\w+) \1 \1 /;
// console.log(repeatRegex.test(repeatStr)); // Returns true
// console.log(repeatStr.match(repeatRegex)); // Returns ["row row row", "row"]

// challenge
let repeatNum = "42 42 42";
let reRegex = /(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
console.log(repeatNum.match(reRegex));
console.log(result);