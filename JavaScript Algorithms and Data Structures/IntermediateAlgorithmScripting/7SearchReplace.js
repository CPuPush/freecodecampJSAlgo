function myReplace(str, before, after) {
    if(before.match(/^[A-Z]/)){
        after = after.charAt(0).toUpperCase() + after.slice(1)
    }else if(before.match(/^[a-z]/)){
        after = after.charAt(0).toLowerCase() + after.slice(1)
    }
    return str.replace(before, after);
  }
  
  console.log(myReplace("Let us go to the store", "store", "mall"));
  console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
  console.log(myReplace("I think we should look up there", "up", "Down"));