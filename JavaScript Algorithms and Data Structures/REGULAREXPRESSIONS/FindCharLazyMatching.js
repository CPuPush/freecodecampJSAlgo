let text = "titanic";
let regex = /t[a-z]*?i/g
console.log(text.match(regex));

let textr = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = textr.match(myRegex);
console.log(result);