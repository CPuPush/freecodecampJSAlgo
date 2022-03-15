function addTogether() {
    let [one, two] = arguments;
    console.log(one,two);
    console.log(typeof(one));
    console.log(typeof(two));
    if(typeof(one) !=="number"){
        return undefined;
    }
    console.log(two);
    if(two === undefined){
        return (two)=>addTogether(one, two);
    }
    if(typeof(two)!=="number"){
        return undefined;
    }
    return one+two;
}
// console.log(addTogether(2, 3));
// console.log(addTogether(23, 30));
console.log(addTogether(5)(7));


//   function add(x) {
//     // Only change code below this line
//     return function(y){
//       return function(z){
//         return x+y+z;
//       }
//     }
  
//     // Only change code above this line
//   }
//   console.log(add(10)(20)(30));