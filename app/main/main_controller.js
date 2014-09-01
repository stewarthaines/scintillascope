(function() {
  'use strict';

  angular.module('scintillascope')
    .controller('MainCtrl', function(
      $scope,
      Dropbox,
      credentials
      ) {

      if (credentials) {
        Dropbox.setCredentials(credentials);
      }

      // initial state, perhaps eventually persisted and restored
      $scope.projectIsOpen = true;

      $scope.running = true;

      // initial state of 'only open one' checkbox
      $scope.oneAtATime = true;

      $scope.showControls = true;

      $scope.state = {
        pixelated: false,
        graphSize: '100x100'
      };

      $scope.toggleRunning = function toggleRunningFn() {
        $scope.running = !$scope.running;
      };

      $scope.toggleControls = function toggleControlsFn() {
        $scope.showControls = !$scope.showControls;
      };
    });
})();
