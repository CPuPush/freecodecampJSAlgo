// Write Concise Object Literal Declarations Using Object Property Shorthand
//Tulis deklarasi objek literal ringkas menggunakan shortand properti objek

//function
// const getMousePosition = (x,y)=>({
//     x : x,
//     y:y
// });
// getMousePosition is a simple funtion that returns an object containing two properties
// here is the same function from above
const getMousePosition = (x,y)=>({x,y});
console.log(getMousePosition(32,44));


// challenge
const createPerson = (name, age, gender) => ({
    // Only change code below this line
    //old way
    // return {
    //   name: name,
    //   age: age,
    //   gender: gender
    // };
    //new way
    name, age, gender
    // Only change code above this line
  });
console.log(createPerson("foriOktoPakpahan", 43, "Man"));

