# ES6 Modules
- ES6 or AKA ESM
- no longer need to use IIFEs ti create global avriables because of intro of ESM

- Imagine you link 2 js scripts into the html, each script file will have its own private scope, and we can choose what things to export from each file and also what things we import into other files
- a top level variables in a module will not be accessible in the global scope
- we have 2 types of importing and exporting:
    1) default
    2) named
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
- when you default import, you can name if whatever because it was exported without a name
- can default export either: 
    1) inline by prepending export default to the declaration. `default` replacde the variable declaration FYI.
    e.g.
    ```export default "Hello"; ```
    2) or on separate line
    ```
    const greeting = "Hello, Odinite!";
    export default greeting;
    ```
- to default import:
    ```
    import helloOdinite from "./one.js";
    ```

## Entry points
- we dont need to import every js file, if two.js depends on one.js (i.e. one.js imported into two.js), then we just need to import two.js and the browser will see that and load one.js too.

## CommonJS
- AKA CJS
- uses syntax like `require` or `module.exports`
- CJS is used a lot in Node.js, but EDM in Node.js is gaining popularity

# Exports 
- In order to use the export declaration in a source file, the file must be interpreted by the runtime as a module. In HTML, this is done by adding type="module" to the <script> tag

# Namespace imports
` import * as myModule from "/modules/my-module.js"; `
- myModule represents a namespace object containing all the exports as properties
- call the export like so:
    ` myModule.doAllTheAmazingThings();`
    