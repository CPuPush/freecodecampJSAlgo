//pop()-> neither method takes parameter, and get out the item at the last of the array
//hift()-> neither method takes parameter, and get out the item at the beginning of the array
//we can also return the value og the removed element with either method
//let popped =greetings.pop()
function popShift(arr) {
    let popped = arr.shift(); // Change this line
    let shifted = arr.pop(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));