function convertToInteger(str) {
    const converts = parseInt(str, 2);
    return converts;
}
console.log(convertToInteger("111001"));


/**
 * parseInt(string, radix)-> parseInt("11", 2)
 * radix say that string is in the binary system, or base 2
 */