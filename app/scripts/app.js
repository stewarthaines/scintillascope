'use strict';

angular.module('scintillascope', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'dropbox',
	'ui.bootstrap'
	])
.config(function ($routeProvider, DropboxProvider) {

	DropboxProvider.config(
		'kohuw3lzq8k6408',
		'http://localhost:9000/bower_components/ngDropbox/callback.html'
		);

	$routeProvider
	.when('/home', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	})
	.otherwise({
		redirectTo: '/home'
	});
});
