# ES6 Modules
- ES6 or AKA ESM
- no longer need to use IIFEs ti create global avriables because of intro of ESM

- Imagine you link 2 js scripts into the html, each script file will have its own private scope, and we can choose what things to export from each file and also what things we import into other files
- a top level variables in a module will not be accessible in the global scope
- we have 2 types of importing and exporting:
    1) default
    2) names
    - **they do the same kind of thing but slightly differently**

## Named exports
- we can either:
    1) stick `export` keyword in front of the declaration
    2) add `export {}` somewhere in the file (usually near the end). the {} contain the list of things to export, using comma to space them.
- to import:
    - use `import {} from ""`, with the {} containing the name of the exported thing and the "" containing the path to the file, e.g. "./one.js"
- **Names imports/exports arent the same as object literals**

## Default exports
- a file can only default export **One** thing
- can default export either: 
    1) inline by prepending export default to the declaration
    e.g.
    ```export default "Hello"; ```
    2) or on separate line
    ```
    const greeting = "Hello, Odinite!";
    export default greeting;
    ```