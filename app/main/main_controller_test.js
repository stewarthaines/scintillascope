(function() {
  'use strict';

  describe('Controller: MainCtrl', function() {

    var MainCtrl,
      scope;

    // load the controller's module
    beforeEach(module('scintillascope'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope
      });
    }));

    it('should attach projectIsOpen=true on scope', function() {
      expect(scope.projectIsOpen).toBe(true);
    });
  });
})();
