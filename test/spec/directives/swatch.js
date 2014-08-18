'use strict';

describe('Directive: swatch', function () {

	// load the directive's module
	beforeEach(module('scintillascope'));

	var element,
	scope;

	beforeEach(inject(function ($rootScope) {
		scope = $rootScope.$new();
	}));

	it('should test something but doesn\'t', inject(function ($compile) {
		expect(true).toBe(true);
	}));
});
