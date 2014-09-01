(function() {
  'use strict';

  describe('Controller: MainCtrl', function() {

    var $controller,
    $rootScope,
    createController,
    scope;

    // load the controller's module
    beforeEach(module('scintillascope'), function() {

    });

    // Initialize the controller and a mock scope
    beforeEach(inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      scope = $rootScope.$new();
      $controller = $injector.get('$controller');

      createController = function() {
        $controller('MainCtrl', {
          $scope: scope,
          credentials: {}
        });
      };
    }));

    it('should attach projectIsOpen=true on scope', function() {
      createController();

      expect(scope.projectIsOpen).toBe(true);
    });

    it('should toggle running flag', function() {
      createController();

      expect(scope.running).toBe(true);
      scope.toggleRunning();
      expect(scope.running).toBe(false);
    });

    it('should toggle controls flag', function() {
      createController();

      expect(scope.showControls).toBe(true);
      scope.toggleControls();
      expect(scope.showControls).toBe(false);
    });

  });
})();
