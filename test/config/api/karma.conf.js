module.exports = function (config) {
  config.set({

    files: [
      './tests.bundle.js'
    ],

    frameworks: [ 'chai', 'mocha' ],

    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-osx-reporter'
    ],

    reporters: [ 'osx' ],

    singleRun: true

  });
};