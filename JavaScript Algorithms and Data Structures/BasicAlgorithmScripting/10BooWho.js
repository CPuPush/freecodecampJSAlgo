function booWho(bool) {
    if(typeof(bool)=== "boolean"){
        return true;
    }else{
        return false;
    }
  }
  
console.log(booWho(1));
console.log(booWho(true));
console.log(booWho(false));