/** this is anonymous function expression that executres right away and outputs*/
(function () {
    console.log("Chirp, chirp!");
})();
/**
 * note that the function has no namme and is not stored in a variable
 * the two parentese() at the end of the function expression cause it to be immediately executed
 * or invoked. This pattern is known as immediately invoked function expression or IIFE
 */

//challenge
/**
 * rewrite the function makeNest and remove its call instead it's an anonymous
 * immediately invoked function expression (IIFE)
 */
//  function makeNest() {
//     console.log("A cozy nest is ready");
//   }
  
//   makeNest();
(function(){
    console.log("A cozy nest is ready");
})();