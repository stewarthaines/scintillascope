(function() {
  'use strict';

  angular.module('scintillascope')
  .factory('PersistenceService', function() {

    var service = {};

    service.getCredentials = function() {
      return angular.fromJson(localStorage['ngDropbox.oauth']);
    };

    return service;
  });
})();
