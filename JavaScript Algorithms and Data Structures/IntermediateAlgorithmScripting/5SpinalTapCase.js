function spinalCase(str) {
    let find = /\s|_/g;
    let strs = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    
    let nesStr = strs.replace(find,"-");
    return nesStr.toLowerCase();
  }
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("ThisIsSpinalTap"));
console.log(spinalCase("This_isSpinalTap"));

//case-satu-dua-tiga