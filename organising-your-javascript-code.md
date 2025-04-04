# Objects and Object Constructors

## Objects as a design pattern
- group things into objects. e.g. tic tac toe:
- example 1 isnt the best way of doing it because what if theres loads more players?
```
// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
  name: "tim",
  marker: "X"
};

const playerTwo = {
  name: "jenn",
  marker: "O"
};
```

## Object Constructors
- a regular function that is named with an uppercase letter
```
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
```
- call it using keyword new. Can also put functions within the object literal method.
```
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'
```
- **To safeguard constructors (calling them without using 'new'), use new.target meta property:**
```
function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}
```

## The prototype
- all objects have a prototype. The prototype is another object that the original object ***inherits*** from.
- use Object.getProptypeOf() to get the .prototype property of the original object (i.e. Object.getPrototypeOf(player1) === Player.prototype)
- So you can write function in a prototype so you can reuse it for each object created with the object constructor. do this by writing Object.prototype.sayHello = function() {}
- can also access objects prototype with __proto__ or [[Prototype ]]. But this is advised to avoid, use .prototype instead.
- prototypes have a .valueOf, i.e. player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
- use hasOwnProperty function to see that a prototype has a property, but the original object doesnt
```
player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf'); // true
```
- inheritance doesnt go on forever. Returns undefined if property isnt found.
    1) first it checks if function is part of original object? No
    2) checks if function is part of original object's prototype? No
    3) checks if function is part of Object.getPrototypeOf(Player.prototype) (=== Object.prototype)? Yes .valueOf is defined on Object.prototype
- use Object.getPrototypeOf() to 'view' the object prototype.
- **use Object.setPrototypeOf(arg1, arg2) to 'set' the object prototype.**
    - takes 2 arguments
        1) the first is which inherits
        2) the one you want the first argument to inherit from
**Note: prototype chain has to be set up using the function ***before*** creating any objects**
- call() function can be useful to copy over properties from one constructor into another but you need to remember to use Object.setPrototypeOf() to link them still.
- Object.Prototype will either be an object or null

## The Javascript this keyword
- can call a function in 4 ways:
    1) simple function invocation
    - in non-strict mode, the this references the global object, which is the window on web browser, or global on Node.js 
    - use "use strict" at the top of the function body to enable strict mode
    2) method invocation
        - when you call a method of an object, this set to the object that owns the method
        - use bind() method to create a new function whos the this keyword is set to a specific value
    3) constructor invocation
    4) indirect invocation


