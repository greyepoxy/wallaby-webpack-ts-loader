const webpackConfig = require('./webpack.config.base');

module.exports = function(wallaby) {
  return {
    files: [{ pattern: 'src/**/*.ts{,x}', load: false }],

    tests: [{ pattern: 'test/**/*Spec.ts{,x}', load: false }],

    postprocessor: wallaby.postprocessors.webpack(webpackConfig),

    env: {
      kind: 'chrome'
    },

    setup: function() {
      window.__moduleBundler.loadTests();
    },

    debug: true,
    trace: true
  };
};
