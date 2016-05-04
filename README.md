# Meteor and Wallaby sample app

This app demonstrates one way to write unit tests for server & client side code using Meteor & Wallaby.

## Getting started:

1. Clone this repo
2. ```npm install```
3. [Install](https://wallabyjs.com/docs/intro/install.html) Wallaby.js into your editor
4. Select a wallaby [config file](https://wallabyjs.com/docs/intro/config.html): either ```wallaby_client.js``` or ```wallaby_server.js```
5. [Start](https://wallabyjs.com/docs/intro/get-started-atom.html) Wallaby

## Stars of the show:

- [Meteor](http://guide.meteor.com/)
  - Recently implemented native npm support in version 1.3
  - import dependencies means unit testing like other node.js apps
  - this app does *not* support the recently added ```meteor test```

- [Wallaby.js](https://wallabyjs.com)
  - instant results, as in, test results appear immediately in your editor *as you type*

## Supporting libraries include:

- [React](https://facebook.github.io/react/)
  - for views

- [mocha](https://mochajs.org/)
  - testing framework

- [chai](http://chaijs.com/)
  - assertion library (
  - ```expect(foo()).to.equal('bar'))```

- [testdouble.js]( https://github.com/testdouble/testdouble.js)
  - alternative to sinon. Easy mocking of imported node modules and meteor packages.

- [teaspoon](https://github.com/jquense/teaspoon)
  - For testing React components using a jQuery-like syntax

## Wallaby specific dependencies:

- [babel](http://babeljs.io/)
  - compiles es2015 & .jsx

- [wallaby-webpack](https://wallabyjs.com/docs/integration/webpack.html)
  - integrates webpack into wallaby to build client side code
  - client side code runs in phantomjs by default
