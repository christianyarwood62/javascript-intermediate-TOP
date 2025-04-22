# Bundling
- concepts of entry points and dependency graphs apply here too, just like ES6 modules
- we provide a bundler with an entry point, then it builds a dependency graph from that file and combines all relevant files together and outputs a single file with all the code included

# Webpack
- one of the most popular JavaScript bundlers
- to install, see https://www.theodinproject.com/lessons/javascript-webpack
- src vs dist:
    - src is 'source', where we keep all out website source code. When we Webpac to bundle our code, it will output tje bundled files into the dist directory
    - dist is 'distribution', 
**Work inside src, build into dist, then deploy from there**

# Bundling JavaScript
- see https://www.theodinproject.com/lessons/javascript-webpack

# Concepts

## Entry points
- indicate which moduel webpack should use to build a dependency graph
- default value is ./src/index.js

## Output
- tells webpack where to emit ***bundles*** it creates and howto name those files.
- defaults to ./dist/main.js for the main output file
- defaults to ./dist folder for any other generated file

## Loaders
- allow webpack to process other types of files (than js and json files) and converts them into valid modules that can be consumed by the application and added to the dependency graph
- have 2 properties:
    1) `test` property identifies which file should be transformed
    2) `use` property indicates which loader should be used to do the transforming

## Plugins
- leveraged to perform wider range of raks like bundle optimisation, asset management, and injection of environment variables
- to use a plugin, you need to `require()` it and add it to the `plugins` array. Need to use `new` operator too

## Mode
- set `mode` to either:
    1) development
    2) production
    3) none
- default value is production

## Browser Compatibility
- webpack supports all browsers that are ES5 compliant
- webpack needs `Promise` for `import() and require.ensure()` 

## Environment
- webpack 5 runs on Node.js