1) run in the directory:
```
npm install --save-dev webpack webpack-cli
```

2) make a src directory, html page, css file, and index js file:
```
mkdir src
touch src/index.js
touch src/template.html
touch src/styles.css
```

3) add import of styles to index.js, by adding the following:
***- add each image you want from an images folder to the index js file***
```
import "./styles.css";

import exampleImage from "./imgs/exampleImage.jpg"
```


4) in the project root, create webpack.common.js file with following code:
```
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
```
5) make webpack.prod.js (production) and webpack.dev.js (development) files:
webpack.dev.js:
```
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
  });
```
webpack.prod.js:
```
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
});
```

5) Handle html:
```
npm install --save-dev html-webpack-plugin
```
6) Load CSS
```
npm install --save-dev style-loader css-loader
```
7) load images:
```
npm install --save-dev html-loader
```

8) Install webpack server:
```
npm install --save-dev webpack-dev-server
```

10) in the package.json file, add scripts property to execute different builds so the file looks like this:
```
{
  "devDependencies": {
    "css-loader": "^7.1.2",
    "html-loader": "^5.1.0",
    "html-webpack-plugin": "^5.6.3",
    "style-loader": "^4.0.0",
    "webpack": "^5.99.7",
    "webpack-cli": "^6.0.1"
  },
  "scripts": {
    "build": "webpack --config webpack.prod.js",
    "dev": "webpack serve --config webpack.dev.js",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  }
}
```
9) run either:
- npm run build. Same as "npm webpack" which updates the page once
- npm run dev. Same as "npm webpack serve" which makes the page update everytime you save
- npm run deploy. Same as "git subtree push --prefix dist origin gh-pages" which pushes the dist files to github pages on github to view
Site available at: http://localhost:8080/

11) deploy to github pages:
- make a branch for github pages: ***(only need to do this the first time you deploy)***
```
git branch gh-pages
```
- update work through git status
- merge changes to gh-pages branch
```
git checkout gh-pages && git merge main --no-edit
```
- bundle app into dist folder:
```
npm run build
```
- run these commands in order:
```
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```
- change source branch in github repository settings
    - go to repo, click settings, select pages in nav bar, change source branch to gh-pages and save