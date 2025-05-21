# OOP principles
- OOP : Object Oriented Programming

## Single Responsibility
- states that a class (or object or module) should have ***one*** responsibility, i.e. everything an object does should be part of one responsibility
- good idea to separate your DOM stuff from application logic stuff for example

## Loosely coupled objects
- tightly covered objects are objects that rely heavily on each other removing or changing one will mean that you have to change another one
- can use the Publish/Subscribe method to reduce coupling

## Solid Principles:
1) single responsibility 
2) Open-closed
    - code should be open for extension, but closed for modification
    - e.g. add code in a new class, but dont modify the previous code
3) Liskov Substitution
    - any class should be substitutable for its parent class without unexpected consequences
    - e.g. square shouldnt inherit from a rectangle (e.g. square extends rectangle) but they should both inherit from a shape class
    - composition is better than inheritance 
4) Interface segregation
    - an entity should never be forced to implement an interface that contains elements which it will never use
    - e.g. add chunks of functionality from classes to an object. e.g.
    ```
    class Penguin {}

    class Bird {}

    const flyer = {
        fly() {
            console.log(`Flap flap, I'm flying!`);
        },
    };

    Object.assign(Bird.prototype, flyer);

    const bird = new Bird();
    bird.fly(); // Outputs 'Flap flap, I'm flying!'

    const penguin = new Penguin();
    penguin.fly(); // 'Error: penguin.fly is not a function'
    ```
5) Dependency Inversion
    - high level code should never depend on low level interfaces, and should use abstractions instead
    - e.g. split code into different classes (like PaymentHandler and PurchaseHandler)



# Linting
- linters willl scan code with a set of style rules and report any errors
- most popular is ESLint
- use lint, by running this in the directory with the package.json file:
```
npm init @eslint/config@latest
```
then go into src and run:
```
npx eslint yourfile.js 

```

# Formatters
- take the code and auto format it according to a set of rules
- they target layout of code, not style errors (like linters)
- prettier is a popular choice

# Validating forms using Javascript
## can use html built in form validation:
    By putting these in the html element tag
    - 'required' in the html element
    - 'minlength' or 'maxlength' 
    - type
    - pattern

## can use Constraint Validation API
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript
- makes the following propertieas available on certain elements (e.g. button, input, select, output, few others)
    - validationMessage
    - validity
    - willValidate
- can use different functions:
    - checkValidity()
    - reportValidity()
    - setCustomValidity(message)

# Asynchronous Code
- asynchoronous functions allow functions to happen in background while rest of code executes

## Callbacks
- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action
- used for asynchronous code a lot
- can cause callback hell (http://callbackhell.com/)

## Promises
- https://www.youtube.com/watch?v=DHvZLI7Db8E
- a promise is an object that might produce a value at some point in the future
- tell our code to wait until the data is done fetching to continue. Promises solve this issue.
- a promise gets declared with new function and passed a function with 2 argument: resolve and reject, e.g.
```
let p = new Promise((resolve, reject) => {
    // do something, e.g.:
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed')
    }
})

// we can use then keyword to then run a different method
// then takes happens after the promise is resolved. catch is ran if the promise was rejected
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => [
    console.log(this is in the catch ' + message)
])
// This code would log 'this is in the then Success'
// if it was: let a = 1 + 2, then the log would be 'this is in the then Failed'
```
### Promise.all([])
- use Promise.all to run multiple Promises at one time. they take an array, e.g.:
```
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded");
    reject('Video 1 Failed');
})
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(messages)
})
// this would log an array of all 3 messages because they all succeeded and used the resolve function
```

### Promise.race
- does the same but it runs the then function once the first promise resolves, and would only console log the message for the first video that was recorded

## Event Loop
- a concept that lives outside of the stack. when a thing that takes time (e.g. setTimeout function), it goes out of the callstack to a webapi which then puts it into a task queue. Once the call stack is empty from other things, the task queue will pop it into the callstack. This is caleld the event loo[]
- jQuery requests will do the same event loop

# APIs
- "Application Programming Interfaces"
- servers created for serving data for external use 
- use fetch() to access API data, fetch is the modern replacement of XMLHttpRequest
```
// URL (required), options (optional)
fetch('https://url.com/some/url')
  .then(function(response) {
    // Successful response
  })
  .catch(function(err) {
    // Error
  });
```
- you shouldnt push paid API keys to frontend, free is fine, because people can see that key and use it
- example script (to get gifs of cats) could be:
```
<script>
  const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
</script>
```
- mode: 'cors' - cors is Cross Origin Resource Sharing, out of scope at this point to learn

# Async and Await
- async and await are 2 keywords that make asynchronous code look like synchornous code
- async/await are just promises written in a different way

## Async keyword
- this is required to use `await` inside any function
- when a function is declared with async, it automatically returns a promise

## Await keyword
- tells js to wait for an asynchronous action to finish before continuing the function
- AKA a 'pause until done' keyword
- the await keyword is used to get a value from a function where you would normally use .then()
- instead of calling `.then()` after the asynchronous function, you would assign a variable to the result using await, then you can use the result in your asynchronous code
- if a method returns a promise, you can use await

## Error handling
- try/catch method
    - if js throws an error in the try block. it runs the catch block code:
    ```
    async function getPersonsInfo(name) {
        try {
            const people = await server.getPeople();
            const person = people.find(person => { return person.name === name });
            return person;
        } catch (error) {
            // Handle the error any way you'd like
        }
    }
    ```

async function loadJson(ur;) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new HttpError(response)
}