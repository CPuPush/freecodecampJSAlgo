let hello = "   Hello, World!  ";
let wsRegex = /\s+/g; // Change this line
let result = hello.replace(wsRegex, '')
console.log(result);