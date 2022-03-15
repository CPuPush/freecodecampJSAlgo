function reverseString(str) {
    let dark = "";
    for(let i = 0; i<str.length;i++){
        dark += str[str.length-1-i];
    }
    return dark;
}
console.log(reverseString("fori okto pakpahan"));