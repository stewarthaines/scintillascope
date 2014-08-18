'use strict';

angular.module('scintillascope')
.directive('dropboxSelect', function (Dropbox) {
	return {
		templateUrl: 'views/dropbox-select.html',
		restrict: 'EA',
		scope: {
			path: '=',
			selectedFilename: '=?selectedFilename'
			//files: '@files'
		},
		controller: function DropboxSelectCtrl($scope) {
			$scope.files = [];
		},
		link: function postLink(scope, element, attrs) {
			/* 
	watch 'path' and refresh directory listing.
			*/

			attrs.$observe('path', function(newValue) {
				console.log('path is ' + newValue);
				//Dropbox.authenticate().then(function() {
					var params = {};
					Dropbox.readdir(newValue, params).then(function(response) {

						scope.files = response;
					});
				//});
			});


		}
	};
});
