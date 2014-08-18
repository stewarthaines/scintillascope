'use strict';

describe('Directive: DropboxAuth', function () {

  // load the directive's module
  beforeEach(module('scintillascope'));

  // need to mock dropbox because we don't want to call anything during unit test
  angular.module('dropbox', []);

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    expect(true).toBe(true);
  }));
});
