# Meteor and Wallaby sample app

This app demonstrates one way to write unit tests for server & client side code using Meteor & Wallaby.

Supporting libraries include:

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

Wallaby specific dependencies:

- [babel](http://babeljs.io/)
  - for es2015 awesomeness and jsx magic

- [wallaby-webpack](https://wallabyjs.com/docs/integration/webpack.html)
  - integrate webpack into wallaby to build client side code
