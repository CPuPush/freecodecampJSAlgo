let string = "aabbaaba aaa aba";
let regex = /a+/g;
console.log(string.match(regex));

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);