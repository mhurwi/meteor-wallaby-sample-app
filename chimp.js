/* eslint-disable */

var path = require('path');

module.exports = {
  watchTags: '@watch',
  path: path.resolve('tests'),
  domainSteps: path.resolve('tests/features'),
  webdriverio: {
    waitforTimeout: 15000,
  },
};
