(function() {
  'use strict';

  angular.module('scintillascope')
  .directive('dropboxAuth', function() {
    return {
      template: '<div><button ng-show="!account" ng-click="authenticate()">Sign in</button> <span ng-show="account">{{ account.display_name }}</span></div>',
      restrict: 'EA',
      scope: {},
      controller: function DropboxAuthCtrl($scope, Dropbox) {

        $scope.authenticate = function() {

          if (Dropbox.isAuthenticated()) {
            Dropbox.userInfo().then(function(response) {
              $scope.account = response;
            });

          } else {
            Dropbox.authenticate().then(function(oauth) {
              console.log('oauth: ' + oauth.uid);
              if (oauth.uid) {
                localStorage['ngDropbox.oauth'] = angular.toJson(oauth);

                Dropbox.userInfo().then(function(response) {
                  $scope.account = response;
                });
              }
            });
          }
        };

        if (localStorage['ngDropbox.oauth']) {
          Dropbox.setCredentials(angular.fromJson(localStorage['ngDropbox.oauth']));

          Dropbox.userInfo().then(function(response) {
            $scope.account = response;
          });

        } else {
          Dropbox.authenticate().then(function(oauth) {
            console.log('oauth: ' + oauth.uid);
            if (oauth.uid) {
              localStorage['ngDropbox.oauth'] = angular.toJson(oauth);
            }

            Dropbox.userInfo().then(function(response) {
              $scope.account = response;
            });
          });
        }

      },
      link: function postLink() {
      }
    };
  });
})();
