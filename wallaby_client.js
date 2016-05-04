var wallabyWebpack = require('wallaby-webpack');
var webpackPostProcessor = wallabyWebpack({
  resolve: { extensions: ['', '.js', '.jsx'] }
});

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'imports/ui/widget-item.jsx', load: false },
    ],
    tests: [
      { pattern: 'imports/ui/ui-tests/*.js*', load: false }
    ],
    compilers: {
       '**/*.js*': wallaby.compilers.babel({
         babel: require('babel-core'),
         presets: ['es2015', 'stage-2', 'react']
       })
    },
    testFramework: 'mocha',
    debug: true,
    postprocessor: webpackPostProcessor,
    bootstrap: function () {
        window.__moduleBundler.loadTests();
    }
  };
};
