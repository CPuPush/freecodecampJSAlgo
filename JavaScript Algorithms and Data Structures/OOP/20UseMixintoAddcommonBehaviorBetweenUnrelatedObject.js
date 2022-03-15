//thi in add commen behavior between  unrelated Object
/**
 * Behavior is shared thorugh inheritance However there are cases when inheritance is not the best solutioin
 * inheritance does work well for unrelated object like Bird and Airplane. They can both fly but a Bird
 * is not a type of Airplane and vice versa
 * 
 * for unrelated Object it's better to use mixins, A mixin allows other object to user a collection of function
 * 
 */
// let flyMixin = function(obj){
//     obj.fly = function(){
//         console.log("Flying, woosh!");
//     }
// };
// //the mixin takes any object and gives it the fly method
// let bird = {
//     name: "Donal",
//     numLegs : 2
// };
// let plane = {
//     model: "777",
//     numPassengers : 524
// };
// flyMixin(bird);
// flyMixin(plane);

//here bird and plane are passed into flyMixin, which then assigns the fly function to each object.
// Now bird and plane can both fly
// console.log(bird.fly()); 
// console.log(plane.fly());
//note how the mizin allows for the same fly method to be reused by unrelated object bird and plane

//challenge
let bird = {
    name: "Donald",
    numLegs: 2,
    loves : function(){
        console.log("i love "  + this.numLegs + " times");
    }
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
/**
 * create mixin named glidemixin that defines a method name glide. Then
 * use glideMixin to give both bird and boat the ability to glide
 */
let glideMixin = function(obj){
    obj.glide =  function(){
        console.log("wuffff");
    }
}

glideMixin(boat);
glideMixin(bird);
console.log(boat.glide());
console.log(bird.glide());
console.log(bird.loves());