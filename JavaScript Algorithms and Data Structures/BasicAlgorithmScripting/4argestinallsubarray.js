/**
 * this code return sub array has element the largest number of all sub array
 */
function largestOfFour(arr) {
    let defaults = arr[0][0];
    let fins = arr[0];
    for(let i = 0; i < arr.length;i++){
        for(let j = 0;j < arr[i].length;j++){
            if(arr[i][j]>defaults){
                defaults = arr[i][j];
                fins = arr[i];
            }
        }
    }
    return fins;
  }
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));