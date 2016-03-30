'use strict';
var files, settings,
  istanbul = require('browserify-istanbul');

files = [
  'test.js'
];

settings = {
  autoWatch: false,
  colors: true,
  singleRun: true,
  browserify: {
    debug: true,
    transform: [istanbul({
      ignore: ['**/node_modules/**'],
      defaultIgnore: true
    })]
  },
  coverageReporter: {
    type: 'lcov',
    dir: 'coverage/',
    includeAllSources: true,
    watermarks: {
      statements: [95, 100],
      functions: [95, 100],
      branches: [95, 100],
      lines: [95, 100]
    }
  },
  reporters: ['dots', 'coverage'],
  files: files,
  frameworks: ['mocha', 'chai', 'sinon', 'browserify'],
  preprocessors: {
    'test.js': ['browserify']
  },
  plugins: [
    'karma-browserify',
    'karma-chai',
    'karma-chrome-launcher',
    'karma-coverage',
    'karma-mocha',
    'karma-sinon'
  ],
  browsers: ['Chrome']
};

module.exports = function (karma) {
  karma.set(settings);
};
