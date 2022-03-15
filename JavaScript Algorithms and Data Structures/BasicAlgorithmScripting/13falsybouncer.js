function mutation(arr) {
    let testt = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for(let i = 0;i<testt.length;i++){
        if(target.indexOf(testt[i]) == -1){
            return false
        }
    }
    return true;
  }
  console.log(mutation(["hello", "hel"]));
//indexOf()