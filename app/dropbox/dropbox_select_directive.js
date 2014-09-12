(function() {
  'use strict';

  angular.module('scintillascope')
    .directive('dropboxSelect', function(Dropbox) {
      return {
        templateUrl: 'dropbox/dropbox_select.html',
        restrict: 'EA',
        scope: {
          path: '=',
          selectedFilename: '=?selectedFilename'
        },
        controller: function DropboxSelectCtrl($scope) {
          $scope.files = [];
        },
        link: function postLink(scope, element, attrs) {
          /* watch 'path' and refresh directory listing. */

          attrs.$observe('path', function(newValue) {
            console.log('path is ' + newValue);
            var params = {};
            Dropbox.readdir(newValue, params).then(function(response) {

              scope.files = response;
            });
          });

        }
      };
    });
})();
