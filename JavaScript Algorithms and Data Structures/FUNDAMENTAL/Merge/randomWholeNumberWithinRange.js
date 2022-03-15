//generate random whole number within a range
function randomWholeRange(min, max){
    let ranges = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(ranges);
    
}
randomWholeRange(100,200)

//task
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax-myMin + 1) + myMin);
    
    // Only change code above this line
  }
console.log(randomRange(10,20));