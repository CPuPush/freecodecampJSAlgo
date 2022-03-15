let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
console.log(testRegex.test(testStr));

//challenge

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);