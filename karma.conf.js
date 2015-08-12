var files, settings;

files = [
  'test.js'
];

settings = {
  autoWatch: false,
  colors: true,
  singleRun: true,
  browserify: {
    debug: true
  },
  reporters: ['dots'],
  files: files,
  frameworks: ['mocha', 'chai', 'sinon', 'browserify'],
  preprocessors: {
    'test.js': ['browserify']
  },
  plugins: [
    'karma-browserify',
    'karma-chai',
    'karma-chrome-launcher',
    'karma-mocha',
    'karma-sinon'
  ],
  browsers: ['Chrome']
};

module.exports = function (karma) {
  karma.set(settings);
};
