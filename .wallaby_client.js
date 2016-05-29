module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'imports/ui/**/*.jsx' },
      { pattern: 'imports/ui/**/*.test.jsx', "ignore": true },
    ],
    tests: [
      'imports/ui/**/*.test.jsx'
    ],
    compilers: {
       '**/*.js*': wallaby.compilers.babel({
         babel: require('babel-core'),
         presets: ['es2015', 'stage-2', 'react']
       })
    },
    testFramework: 'mocha',
    env: {
      type: 'node'
    }
  };
};
