/**
 * as you have seen from appliying array.prototype.map(),
 * or simply map()earlier, the map method returns an array og the same length as the
 * one it was called on. it also doesn't alter the ori
 */
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
    for(let i = 0; i<this.length;i++){
        newArray.push(callback(this[i]))
    }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
console.log(new_s);