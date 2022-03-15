function myLocalScope() {
    // Only change code below this line
  let myVar = "NO";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

  /**
   * variables which are declared within a function, as well as the function parameters, have local scope
   * 
   * That means they are only visible within that function
   */