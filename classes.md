# Classes
- Javascript doesnt have classes like Java or Ruby.
- ES6 introduces the ***class*** keyword. But it is new syntax for the exact same as object constructors and prototypes

# Property getters and setters
- There are 2 kinds of object properties:
    1) data properties
        - these are previous things I learned
    2) accessor properties
        - these are getter and setters

## Getters and setters
- e.g.
```
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```

## Accessor Descriptors
- descriptors for accessor properties are different from those for data properties
- an accessor descriptor may have:
    - get - a function without arguments
    - set - a function with 1 argument
    - enumerable - same as data properties
    - configurable - same as data properties
- cant supply value and get in the same descriptor


## Smarter getters/setters
- can use private variables to gain more control over operations
```
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name is too short...
```

## Using for compatibility
- can take control over "regular" data properties at any moment by replacing it with a getter and a setter and tweak its behavior.
```
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday is available
alert( john.age );      // ...as well as the age
```

# Class Syntax
- wiki: classes are code templates for creating objects, providing initial values for states (member valuables), and implementations of behaviour (member functions/methods)
- syntax is:
```
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
``` 
- you can use new Myclass() to create an objects with all listed methods. 
- contructor() is called automatically by using keyword 'new', so initialise the object there
- **Dont use commas here**
- a class is a kind of function
- a class can be a |syntactic sugar", basically syntax to make it easier to read, but doesnt introduce anything new, i.e. we could declare the same thing without using the class keyword
    - but there are differences:
    1) a function created by class is labelled a special internal property, [[IsClassContructor]]: true
    2) class methods are non-enumerable. A class definition sets enumerable to false for all methods of prototype
    3) classes always use strict, so all code inside class construct is strict mode

# Class Expression
- just like functions, classes can be defined inside other expressions, e.g.:
```
 let User = class {
  sayHi() {
    alert("Hello");
  }
};
```

# Class Fields
- class fields is a syntax that allows to add any properties
- e.g.
```
class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!
```
    - **Important - these are set on individual objects, not the User.prototype

# Making bound methods with class fields
- cant reference 'this' without it showing undefined when you call an object method
```
class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined
```
- have to do:
    1) pass a wrapper function, such as setTimeout(() => button.click(), 1000).
    2) bind the method to obhject, e.g. in the constructor

# Summary
- basic syntax is:
```
class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}
```