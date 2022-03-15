/**
 * Array.prototype.reduce() or simply reduce() is the most general of all array operation in JS
 * we can solve almost any array processing problem using reduce method
 */
/**
 * the callback function accepts 4 arguments. the first argument is known as the accumulator
 * , which gets assigned the return value of the callback function from the previous iteration
 * the second is the current element being processed,
 * the third is the index of that element
 * and the four is the array upon which reduce is called
 * 
 * in addition to the callback function, reduce has an additional parameter which takes an initial value
 * for the accumulator. if this second parameter is not userd, then the first iteration is skipped and the second iteration gets passed the first element 
 * of the array as the acumulator
 */
/**See below for an example using reduce on the users array to return the sum of all the users' ages. For simplicity,
 *  the example only uses the first and second arguments. */
const users =[
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
]
const sumOfAge = users.reduce((sum, user)=> sum + user.age, 0);//0 sebagai nilai awal, sum sebagai nilai yang selalu berubah, user nilai yang lagi dilooping
/**
 * 3 argument
 * 1 nilai yang selalu berubah
 * 2 nilai yang lagi di looping
 * 3 nilai awal untuk sum
 *  */ 
console.log(sumOfAge);
// object can be returned containing the names of the users as properties with their ages as values
const usersObj = users.reduce((obj, user)=>{
    obj[user.name] = user.age;
    return obj;
},{});
console.log(usersObj);