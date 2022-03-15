function convertHTML(str) {
    let strs = str.split("");
    for(let i = 0;i<strs.length;i++){
        switch(strs[i]){
            case ">":
                strs[i] = "&gt;";
                break;
            case "<":
                strs[i] = "&lt;";
                break;
            case "&":
                strs[i] = "&amp;";
                break
            case "'":
                strs[i] = "&apos;";
                break;
            case '"':
                strs[i] = "&quot;"
                break;
        }
    }
    return strs.join("");
}
  
  
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));