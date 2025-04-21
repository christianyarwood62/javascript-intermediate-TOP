# npm
- npm is a package manager, full of plugins, libraries and other tools
- doesnt stand for Node Package Manager... It is a recursive bacronymic abbreviation for "npm is not an acronym"

# package.json
- npm revolves around a file called package.json.
- contains info about our project, such as name or any dependencies and their version and numbers
- if you ran `npm install`. npm would read the package.json file and install any packages. then you can run any nm scripts that use that package

## to create a json file:
- package.json file:
    - e.g.:
        ```
        {
        "name": "my-awesome-package",
        "version": "1.0.0",
        "author": "Your Name <email@example.com> (https://example.com)"
        }
        ```

- run a CLI questionnaire or create a default package.json file:
- cd to the root directory of the package, then run `npm init`, then answer the questions
    - https://docs.npmjs.com/creating-a-package-json-file

## installing unscoped package
- can be searched for, installed and downloaded by anyone
run `npm install <package_name>`

## installing a scoped public package
- can be downloaded and installed by anyone,a s long as scope name is references during installation
run `npm install @scope/package-name`

## installing a private package
- can only be downloaded and installed by those granted read access to the package. must reference the scope name during installation too.
run `npm install @scope/private-package-name`

## testing package installation
run `ls node_modules` to see that it contains a directory for the package installed

## installed package version
- If there is a package.json file in the directory in which npm install is run, npm installs the latest version of the package that satisfies the semantic versioning rule declared in package.json.
- If there is no package.json file, the latest version of the package is installed.

# Dependencies
- any packages we install are called 'dependencies', but is packages arent used for user facing app, they are called 'development dependencies'
