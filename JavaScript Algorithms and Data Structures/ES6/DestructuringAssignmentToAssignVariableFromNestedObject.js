//nestedObject
//ex
const user = {
    jhonDow:{
        age: 34,
        email: 'ff@gmail.com'
    }
}
//assign an object properties' values to variable with same name
// const{jhonDow:{age, email}} = user;
// console.log(age);
// console.log(email);

//assign an object properties' values to variable with different name
// const{jhonDow:{age:userAge, email:userEmail}} = user;
// console.log(userAge);
// console.log(userEmail);

//challenge
const LOCAL_FORECAST = {
    yesterday: { 
        low: 61, 
        high: 75 },
    today: { 
        low: 64, 
        high: 77 },
    tomorrow: { 
        low: 68, 
        high: 80 }
  };
//today's data
const{today:{low:todayLow, high:todayHigh}} = LOCAL_FORECAST;

console.log(todayLow);
console.log(todayHigh);
