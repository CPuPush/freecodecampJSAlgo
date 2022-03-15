/**
 * so far, we have seem two distinct principles for functional programming
 * 1. Dont't alter a variable of object - create new variables and object and return them
 * if need be from a function. Hint: using some like const newArr = arrvar,
 * where arrVar is an array will simply create a referemce ro the existing variable and not a copy.
 * so changing a value in newArr would change the value in arrVar
 * 
 * 2. declare function parameter- any computation inside a function depends only on the argumet passed
 * to the function, and not on any global object or variable.
 * 
 */
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
    let newArr = [...arr];
    newArr.push(bookName);
    return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
    const newArr = [...arr];
  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);//delete element arr in index and 1 element from index
    return newArr;

    // Change code above this line
    }
}
console.log(add(bookList, "A Brief History of Time"));
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));