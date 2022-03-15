function getIndexToIns(arr, num) {
    let result = 0;
    for(let i = 0; i<arr.length;i++){
        if(arr[i]<num){
            result +=1;
        }
    }
    return result;
  }
  
  getIndexToIns([40, 60], 50);