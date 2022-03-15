//common way to export
const add = (a,b)=> {
    return a + b
}
export{add};
// same thing like this:
/**
 const add= (a,b)=> a+b;

 export {add};
 */
// import it in another file and use it without having to rewerite the code
// export {add, subtract}
//challenge to export uppercaseString adn lowercaseString
// const uppercaseString = (string) => {
//     return string.toUpperCase();
//   }
  
//   const lowercaseString = (string) => {
//     return string.toLowerCase()
//   }
// export{uppercaseString, substract};
// export{lowercaseString, substract};

//export default
//usually you will use this syntax if only one value is being exported form a file. it is also used to create a fallback value for a file or module
export default function addition(a,c){
    return a + c;
}
export default function (dd){
    return dd*dd;
}
//challenge
//cannot use declaration variable like var, let, const to using export default
//export default function substract(x,y){}