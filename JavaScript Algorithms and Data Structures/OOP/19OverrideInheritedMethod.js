//last challenge
//ChildObject.prototype = Object.create(ParentObject.prototype)

//then the childObject received its own method by chaining them onto its prototype
//ChildObject.prototype.methodName = function(){}

//override
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};

let duck = new Bird();
console.log(duck.eat());


//challenge
//Overriding the fly() method for penguid o that it returs the string "Alas, this is a flightless bird "

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;


// Only change code below this line
Penguin.prototype={
    fly : function(){
        return "Alas, this is a flightless bird.";
    }
}


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());