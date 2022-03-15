// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;//possitive
// let qRegex = /q(?!u)/;//negative
// console.log(quit.match(quRegex));
// noquit.match(qRegex);

// let password = "abc123";
// let checkPass = /(?=\D\d)/;
// console.log(checkPass.test(password));

//challenge
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);