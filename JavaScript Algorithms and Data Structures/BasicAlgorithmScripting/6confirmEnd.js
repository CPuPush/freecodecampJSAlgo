// function confirmEnding(str, target) {
//     if(str.endsWith(target)){
//         return true;
//     }else{
//         return false;
//     }
//   }
  
// console.log(confirmEnding("Bastian", "n"));
function confirmEnding(str, target) {
    return str.slice(str.length-target.length) == target;
    
}
console.log(confirmEnding("Bastian", "n"));