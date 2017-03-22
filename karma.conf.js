var webpackConfig = require('./webpack.config.js');


// This function is really specific to karma test runner, so details do matter
module.exports = function(config){
  config.set({
    //Specify the browsers we want our test to run in.
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    // The test files we want to be executed.
    // Specified globbing pattern to match all files inside subfolders inside /tests/ where their name finishes in .test.jsx
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/js/foundation.min.js',
      'app/tests/**/*.test.jsx'
    ],
    // Preprocesors specify the things we want to do with our test files.
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    // Shows us which test passed and which failed
    reporters: ['mocha'],
    //Specifies a timeout of 5 seconds for every test
    client:{
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer:{
      noInfo : true
    }
  });
};
