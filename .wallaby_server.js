module.exports = function (wallaby) {
  if (!wallaby) return;

  return {
    files: [
      '../imports/api/foo.js',
    ],
    tests: [
      '../imports/api/api-tests/*.js*',
    ],
    compilers: {
       '**/*.js*': wallaby.compilers.babel({
         babel: require('babel-core'),
         presets: ['es2015', 'stage-2']
       })
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha'
  };
};
