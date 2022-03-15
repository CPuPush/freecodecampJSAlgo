let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  console.log(crow instanceof Bird);
  crow instanceof Bird;
  /**
   * instance of  allow  to compare an object to a constructor return true or false
   * if object created without using a constructor instanceof
   * will veriry that it is not an instance of that constructor
   */