function whatIsInAName(collection, source) {
    // Only change code below this line
    //getkeys and return to array
    const keys = Object.keys(source);
    //looping collection
    return collection.filter((obj)=>{
        //looping key source
        for(let i = 0;i<keys.length;i++){
            if(!obj.hasOwnProperty(keys[i])||obj[keys[i]] !==source[keys[i]]){
                return false;
            }
        }
        return obj;
    });
    // Only change code above this line
    // return arrs;
  }
  
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
//                             { first: "Mercutio", last: null }, 
//                             { first: "Tybalt", last: "Capulet" }],

//                             { last: "Capulet" }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, 
                            { "bat": 2 }, 
                            { "apple": 1, "bat": 2, "cookie": 2 }], 

                            { "apple": 1, "bat": 2 }));