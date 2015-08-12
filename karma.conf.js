var files, settings,
  _ = require('lodash');

files = [
  'test.js'
];

settings = {
  autoWatch: false,
  colors: true,
  singleRun: true,
  transports: ['websocket'],
  browserify: {
    debug: true,
    transform: ['es6ify']
  },
  reporters: ['dots'],
  files: files,
  frameworks: ['mocha', 'chai', 'sinon', 'browserify'],
  preprocessors: {
    'index.js': ['browserify']
  },
  plugins: [
    'karma-browserify',
    'karma-chai',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-mocha',
    'karma-sinon'
  ]
};

module.exports = function (karma) {
  karma.set(_.assign(settings, {
    browsers: ['Chrome', 'Firefox']
  }));
};

module.exports.files = files;
module.exports.settings = settings;
