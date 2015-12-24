'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function () {
  return function (input) {
    return input ? '✓' : '✘';
  };
});