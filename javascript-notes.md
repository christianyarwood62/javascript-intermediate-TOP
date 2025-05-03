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