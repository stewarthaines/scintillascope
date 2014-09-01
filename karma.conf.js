// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
	config.set({
		// base path, that will be used to resolve files and exclude
		basePath: '',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
			'app/bower_components/angular/angular.js',
			'app/bower_components/angular-mocks/angular-mocks.js',
			'app/bower_components/angular-resource/angular-resource.js',
			'app/bower_components/angular-cookies/angular-cookies.js',
			'app/bower_components/angular-sanitize/angular-sanitize.js',
			'app/bower_components/angular-route/angular-route.js',
			'app/bower_components/angular-bootstrap/ui-bootstrap.js',
			'app/bower_components/ngDropbox/dropbox.js',
			'app/app.js',
			'app/main/*.js',
			'app/dropbox/*.js',
			'app/services/*.js',
			'app/graph/*.js',
		],

		// list of files / patterns to exclude
		exclude: [
//			'app/**/*_test.js'
		],

		reporters: ['dots', 'junit', 'coverage' ],

		/* nothing from bower_components, app/*.js, then app/**\/*.js, except *_test.js */
		preprocessors: {
			'app/{*,**!(bower_components)/!(*_test)}.js': [ 'coverage' ]
		},

		coverageReporter: {
			type : 'html',
			subdir: function(browser) {
				return browser.toLowerCase().split(/[ /-]+/)[0];
			},
			dir : 'coverage/'
		},

		plugins: [
			'karma-coverage',
			'karma-junit-reporter',
			'karma-jasmine',
			'karma-phantomjs-launcher'
		],

		// web server port
		port: 8080,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true
	});
};
