//Use Destructuring Assignment to pass an Object as a Function's parameters
// const profileUpdate = (profileData)=>{
//     const {name,age,nationality, location} = profileData;
// }
// // same
// const profileUpdate = ({name,age,nationality,location})=>{

// }
//that is mean we can destructure the object in a function argument itself

//challenge
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
//   const half = (stats) => (stats.max + stats.min) / 2.0;
  const half = ({max, min}) => (max + min)/2;
  console.log(half(stats));
  
  // Only change code above this line
