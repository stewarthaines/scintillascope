'use strict';

angular.module('scintillascope')
  .controller('MainCtrl', function($scope, Dropbox) {

    if (localStorage['ngDropbox.oauth']) {
      Dropbox.setCredentials(angular.fromJson(localStorage['ngDropbox.oauth']));
    }

    Dropbox.accountInfo().then(function(response) {
      $scope.account = response;
    });

    /*
  Dropbox.copy('dir/image1.jpg', 'dir/image2.jpg').then(function (res) {
    Dropbox.move('dir/image1.jpg', 'dir/image.jpg').then(function (res) {
      $scope.photos = Dropbox.stat('dir');
    });
  });
*/

    // initial state, perhaps eventually persisted and restored
    $scope.projectIsOpen = true;

    $scope.running = true;

    // initial state of 'only open one' checkbox
    $scope.oneAtATime = true;

    $scope.showControls = true;

    $scope.state = {
      graphSize: '100x100'
    };

    $scope.toggleRunning = function toggleRunningFn() {
      $scope.running = !$scope.running;
    };

    $scope.toggleControls = function toggleControlsFn() {
      $scope.showControls = !$scope.showControls;
    };
  });
