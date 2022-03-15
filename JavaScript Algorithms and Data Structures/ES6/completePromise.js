const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      // Change this line
      resolve("We got the data");
    } else {  
      // Change this line
      reject("Data not received");
    }
  });
//handle a resolve promise
/**
 * promise are most useful when you have a process that takes an unknown amount of time in your code
 * when server respon, we usually wnat to do something with teh response from the server
  myPromise.then(result=>{

  });
*/
makeServerRequest.then(result=>{
    console.log(result);
    
});

//handle a rejeted primse with catch
//catch is the method used when your promise has been rejected. itis executed immediately after a promise's rejected ethod is called
makeServerRequest.catch(error=>{
    console.log(error);
    
})