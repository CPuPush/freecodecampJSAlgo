//we can use indexOf()  to check presense of the array
//return index and return -1 if not present
function quickCheck(arr, elem) {
    // Only change code below this line
    const checks = arr.indexOf(elem);
    if(checks >= 0){
        return true;
    }else{
        return false;
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));