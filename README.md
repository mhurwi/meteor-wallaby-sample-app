# Meteor and Wallaby sample app


* under development. *

This app represents just one preferred tech stack, with a heavy emphasis on testing. It exists for a few reasons:

1. Demonstrate TDD and BDD with Meteor

  - Building Meteor in a TDD and BDD style has become much more feasible with Meteor's recent updates.

2. Kickstart professional grade apps

 - Useful boilerplates allow you to spin up a simple app that's geared for development and production. This is one such attempt.

3. Learn how to build using the various technologies (Meteor, React, Mocha, etc...)

 - Just picking the stack you like is challenging. But then you have to learn how to use it.


## Getting started:

1. Clone this repo
2. ```npm install```
3. [Install](https://wallabyjs.com/docs/intro/install.html) Wallaby.js into your editor
4. Select a wallaby [config file](https://wallabyjs.com/docs/intro/config.html): either ```wallaby_client.js``` or ```wallaby_server.js```
5. [Start](https://wallabyjs.com/docs/intro/get-started-atom.html) Wallaby
6. ```npm run chimp:watch```

## Stars of the show:

- [Meteor](http://guide.meteor.com/)
  - Recently implemented native npm support in version 1.3
  - import dependencies means unit testing like other node.js apps
  - this app does *not* support the recently added ```meteor test```

- [Wallaby.js](https://wallabyjs.com)
  - instant results, as in, test results appear immediately in your editor *as you type*

- [Chimp](https://chimp.readme.io/)
  - Acceptance testing tool
  - Runs cucumber tests against an actual browser
  - uses [webdriver.io](http://webdriver.io/)

- [React](https://facebook.github.io/react/)
  - for views

## Supporting libraries include:
- [redux](http://redux.js.org/)
  - manages state in a single store
  - dispatch actions and reduce their effects into state changes

- [react-router](https://github.com/reactjs/react-router)
  - react's most popular routing solution

- [react-komposer](https://github.com/kadirahq/react-komposer)
  - for reactively adding meteor collection data to a component

## Testing libraries:

- [mocha](https://mochajs.org/)
  - testing framework

- [chai](http://chaijs.com/)
  - assertion library (
  - ```expect(foo()).to.equal('bar'))```

- [cucumber](https://cucumber.io/)
  - Behavior driven design
  - Specs in plain english

- [testdouble.js]( https://github.com/testdouble/testdouble.js)
  - alternative to sinon. Easy mocking of imported node modules and meteor packages.

- [enzyme](https://github.com/airbnb/enzyme)
  - renders and tests react components
  - abstracts the complicated React Test Utils library

## Wallaby specific dependencies:

- [babel](http://babeljs.io/)
  - compiles es2015 & .jsx

- [wallaby-webpack](https://wallabyjs.com/docs/integration/webpack.html)
  - integrates webpack into wallaby to build client side code
  - client side code runs in phantomjs by default

## UI Doodads

- [react-s-alert](https://github.com/juliancwirko/react-s-alert)
  - flash notifications to the user with a simple api
  - see ```imports/ui/layouts/app.js``` for the main component
