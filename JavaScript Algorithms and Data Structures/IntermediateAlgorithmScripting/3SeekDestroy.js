function destroyer(arr) {
    const args = Array.from(arguments);
    let arr1 = args[0];
    let arr2 = args.slice(1, args.length);
    const filt = arr1.filter(el=> !arr2.includes(el));
    return filt;
}
  
 
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 4, 5], 2, 3));