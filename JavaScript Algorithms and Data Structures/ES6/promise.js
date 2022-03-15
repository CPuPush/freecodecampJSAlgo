/**
 * promise is a ocnstructor function so you need to use the new keyword to create one. it takes a function
 * as its argument, with 2 parameters-resolve and reject. these are methods used to determine the
 * outcome of the promise 
 */
// const myPromise = new Promise((resolve, reject)=>{

// });
//challenge create new promise claled makeServerRequest. pass in a functin with resolve and 
//reject parameter to the constructor
// const makeServerRequest = new Promise((resolve, reject) =>{

// });
//resolve and reject is a parameters and the parameters is a function
//complete the promise with resolve and rejected
const muPromise = new Promise((resolve, rejected)=>{
    if(conditionHere){
        resolve("Promise was fulfilled");
    }else{
        rejected("Promise wa rejected");
    }
});
