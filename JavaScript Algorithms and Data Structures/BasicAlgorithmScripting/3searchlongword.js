function findLongestWordLength(str) {
  let arrays = str.split(" ");
  let defaults = arrays[0].length;
  for(let i = 0; i<arrays.length;i++){
    if(arrays[i].length >= defaults){
      defaults = arrays[i].length;
    }
  }
  return defaults;
  // for(let testt = 0; testt < defaults.length;)
  // return str.length;
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));