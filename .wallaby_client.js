module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'imports/ui/components/widget-item.jsx' },
      { pattern: 'imports/**/*.jsx' },
      { pattern: 'imports/**/*.test.jsx', "ignore": true },
    ],
    tests: [
      'imports/**/*.test.jsx'
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
