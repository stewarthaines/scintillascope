'use strict';

angular.module('scintillascope')
  .directive('swatch', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      /*controller: [ '$scope', function( $scope ) {

      }],*/
      link: function postLink(scope, element /*, attrs */) {
        element.text('this is the swatch directive');
      }
    };
  });
