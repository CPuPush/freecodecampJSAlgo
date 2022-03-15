function chunkArrayInGroups(arr, size) {
    let result = [];
    for(let i = 0;i<arr.length;i+=size){
        result.push(arr.slice(i, size+i));
    }
    return result;
  }
  

  console.log(  chunkArrayInGroups(["a", "b", "c", "d"], 2));