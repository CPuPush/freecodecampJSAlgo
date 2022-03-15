let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
let result = firstRegex.test(firstString);
console.log(result);
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst));