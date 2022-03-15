/**
 * with rest parameter, you can create function that take a variable number of arguments
 * the rest parameter eliminates the need to check the args array and allows us to apply map(), filter()
 * and reduce () on the parameter
 */
function checkArgs(...args){
    return "you have " + args.length + " Arguments";
}
console.log(checkArgs(1,2,3,4,4,[], {}));

//challenge
const sum = (...args) => {
    const argss = args;
    return argss.reduce((a,b) => a+b, 0);
}
console.log(sum());

/**
 * fungsi reduce  mengeksekusi fungsi yang disesiakan untuk setiap nilai dari array(from left-to-right)
 */
//contoh lain penjelasan reduce


//function dibawahini bisa juga tetapi biar lebih cepat menggunakan arrow function
// function getSum(total, num) {
//     return total + num;
// }
function myFunction(...args) {
    const argsTake = args;
    return argsTake.reduce((a,b)=> a+b, "There no Value");
}
console.log(myFunction(2,3,4,5));
