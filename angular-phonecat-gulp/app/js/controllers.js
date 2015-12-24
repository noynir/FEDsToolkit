'use strict';
/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl',function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
});

phonecatControllers.controller('PhoneDetailCtrl',function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
});
