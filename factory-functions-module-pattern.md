# Scopes
- scoping asks "where is certain variable available to me?"
    - variables outside {} are global variables
    - variables in {} are locally scoped
- var keyword is function scoped. Const and let are block scoped, e.g. the nearest {}, so could be an if statement or for loop.

# Closures
- functions in Javascript cause closures
- a closure refers to the combination of a function and ***surrounding state*** in which function was declared
- surrounding state is AKA lexical environment. It consists of variables that were in scope at the time closure was made

# Disadvantages of constructors
- dont provide safeguards that prevent using them wrong
- e.g. not using the new keyword
- another issue stems from misuing instanceof
- Factory functions solves these issues

# Factory functions
- one key difference from constructors: levy the power of closures
- just like a function:
```
function createUser (name) {
  const discordName = "@" + name;
  return { name, discordName };
}
```

# Destructing
- another expression to allow you to 'unpack' values from an object (or array)
```
const obj = { a: 1, b: 2 };
const { a, b } = obj;
```

# Private Variables and functions
- private variables are ones that we cant access directly in the object instance, only accessed via the closures we defined
- private variables use closures to create smaller dedicated variables and functions within the factory function itself - things we dont need to return in the object itself
- denote private variables with underscore before variable name

# The Module pattern: IIFEs
- dont need a factory to produce multiple objects, use factories to wrap sections of code together instead
- IIFE: Immediatatly Invoked Function call
    - wrap factory function in parenthesis and call it immediately
```
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476
```

## Encapsulting with the module pattern
- bundle code into a single unit with selective access to things inside the unit itself
- encapsulting leads to namespacing
    - namespacing is a technique that is used to avoid naming collisions in programs
- 

# https://wesbos.com/javascript/03-the-tricky-bits/scope#function-scoping
## function scoping
- window is the global scope
- you can name variables the same thing if they arent in the same scope, aka shadow variables
    - name the variable in the function more specically, e.g. myAge vs age
- it will always try to find a variable in that scope, then go a scope higher, i.e. if its not in the function, it will go to the window

## Block scoping
- const variables can't be reassigned, let and var can
- this code doesnt work because cool cant leave the curly brackets. Using let wont work either, but using var would work...
```
if (1 === 1) {
  const cool = true;
}
console.log(cool);
```

- Block scoping is one of the reasons people say use const by default, let when you want to re-assign it and don't use var unless there is a specific use case for it.
- var variable arent block scope, they are function scoped, so they will leak out of a block, i.e. (if statement) {}

## Lexical and static scoping
- Block scoping is one of the reasons people say use const by default, let when you want to re-assign it and don't use var unless there is a specific use case for it.
- variable look-up or scope look-up happens, is where the functions are defined, not where they are run.
- best practices:
    1) try not to create global variables
    2) functions are scopes the exact same as variables

## Closures
- A closure is the ability to access a parent level scope from a child scope, even after the parent function has been terminated.
- What you can do is stick a function into a variable, and then at a later point in time, you can have access to that function. A closure comes into play because you can access the function even though the outer function is done.
    -  The variable is not cleaned up or "garbage collected" which is a term that is often used.
- use a return for the second function in 2 ways:
    1) 
    ```
    function outer() {
        const outerVar = "Hey I am the outer Var";
        return function inner() {
            const innerVar = "hey I am an inner var";
            console.log(innerVar);
            console.log(outerVar);
        }
    }
    ```
    2)
    ```
    function outer() {
        const outerVar = "Hey I am the outer Var";
        function inner() {
            const innerVar = "hey I am an inner var";
            console.log(innerVar);
            console.log(outerVar);
        }
        return inner;
    }
    ```
- inner scope is the second function
- outside scope is the whole piece of code
## Private variables
- can use closures to create private variables
- we can use this to run multiple game functions at once
- usually define a variable with underscore to mean its private

# https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm
## Module Patterns
- modules are created as an IIFE with a function inside
```
const SomeModule = (function() {})();
```
- the parenthesis around the function just makes javascript evaluate it first so then it can run with the empty parenthesis after
- Everything within the body of said function is bound to that module and can be seen by each other.
- This shows that everything publicly exposed can be changed from the outside. This is one of the biggest module pattern drawbacks.