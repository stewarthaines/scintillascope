(function() {
  'use strict';

  angular.module('scintillascope', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'dropbox',
    'ui.bootstrap'
  ])
    .config(function($routeProvider, DropboxProvider) {

      DropboxProvider.config(
        'kohuw3lzq8k6408',
        'http://localhost:9000/bower_components/ngDropbox/callback.html'
      );

      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          resolve: {
            credentials: function(PersistenceService) {
              return PersistenceService.getCredentials();
            }
          },
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
