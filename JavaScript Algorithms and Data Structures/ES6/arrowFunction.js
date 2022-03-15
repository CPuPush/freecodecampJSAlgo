//use arrow functions to write concise anonymous function
/**
 * we often don't need to name our function, especially when passing a function as an argument to another function
 */
//we often use
const myFunction = function(){
    const myFar = "value";
    return myFar;
}
function dark(x,d){
    const elementAdded = x + d;
    return elementAdded
}
console.log(dark(myFunction(), "good"));
//now with arrow function
const myFunc = () =>{
    const myVar = "value";
    return myVar;
}
//when there is no function body, and onlu a return value, arrow funtion syntaz allow to omit the keyword return
// as well as the brackets surrounding the code
const myFuntt = () => "no return bro";
console.log(myFuntt());

//tantangan
const magic = () => new Date();
console.log(magic());
