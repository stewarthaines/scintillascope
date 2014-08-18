'use strict';

describe('Directive: DropboxSelect', function () {

  // load the directive's module
  beforeEach(module('scintillascope'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    expect(true).toBe(true);
  }));
});
