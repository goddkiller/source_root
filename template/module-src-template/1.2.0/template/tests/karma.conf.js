// Testacular configuration
// Generated on Tue Feb 05 2013 10:48:28 GMT+0800 (中国标准时间)


// base path, that will be used to resolve files and exclude
basePath = '.';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
   '../../seajs/sea-debug.js',
   '../../seajs/plugin-shim.js',
   SEAJS_ADAPTER,
   '../../seajs-config-dev.js',
   '{{name}}-spec.js',
  {pattern: '../../lib/**/*.js', watched: false, included: false, served: true},
  {pattern: '../../../js/**/*.*', watched: false, included: false, served: true},
  {pattern: '../../seajs/*.js', watched: false, included: false, served: true},
  {pattern: '../src/*.js', watched: false, included: false, served: true},
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['dots', 'progress', 'junit'];

junitReporter = {
  outputFile: 'test-results.xml'
};

// web server port
port = 8801;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
//captureTimeout = 5000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;

// proxies = {"/js":"http://product.mediav.com/js","/bootstrap":"http://product.mediav.com/bootstrap"}