// let testStr = "Pumpkin";
// let testRegex = /P(engu|umpk)in/;
// let result = testRegex.test(testStr);
// console.log(result);

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result);