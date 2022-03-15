function truncateString(str, num) {
    if(str.length>num){
        let container = "";
        for(let i= 0;i < num;i++){
            container +=str[i];
        }
        return container+"...";
    }
    else if(str.length == num){
        return str;
    }
    else{
        return str;
    }
  }
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));