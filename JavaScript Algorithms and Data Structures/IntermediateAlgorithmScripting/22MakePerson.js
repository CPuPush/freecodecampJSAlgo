const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  
  //firstName
  this.getFirstName = function(){
    return firstAndLast.split(" ")[0];
  }
  
  //lastName
  this.getLastName = function(){
    return firstAndLast.split(" ")[1];
  }

  //setFirstName
  this.setFirstName = function(first){
    firstAndLast  = first + " " + this.getLastName(); 
  }

  //setLastName
  this.setLastName = function(last){
    firstAndLast = this.getFirstName() + " " + last;
  }
  //setFullName
  this.setFullName = function(done){
    firstAndLast = done;
  }
  //getFullName
  this.getFullName = function() {
    return this.getFirstName()+" "+this.getLastName();
  };
};

const bob = new Person('Bob Ross');
//bobros
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.setFirstName("Angga"));
console.log(bob.getFullName());

//test last
bob.getLastName("naro");
console.log(bob.getFullName());

//test fullname
bob.setFullName("Haskel Curry");
console.log(bob.getFullName());

//test firstname
console.log(bob.getFirstName());