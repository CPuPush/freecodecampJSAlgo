function palindrome(str) {
    //no punctation spaces and symbol with lowercases
    let regex = /\W|_/g;
    let newString = str.replace(regex, "").toLowerCase();
    return newString.split("").reverse().join("") === str.replace(regex, "").toLowerCase();
}
console.log(palindrome("My a___ge is 0, 0 si e$$$ga ym."));