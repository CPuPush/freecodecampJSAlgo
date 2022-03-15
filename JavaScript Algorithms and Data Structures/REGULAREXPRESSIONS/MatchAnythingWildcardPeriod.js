let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/g; // Change this line
let result = exampleStr.match(unRegex);
console.log(result);

/**
 * complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun
 */