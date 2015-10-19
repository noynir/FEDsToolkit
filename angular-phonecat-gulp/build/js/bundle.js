'use strict';

var phonecatAnimations = angular.module('phonecatAnimations', ['ngAnimate']);

phonecatAnimations.animation('.phone', function() {

  var animateUp = function(element, className, done) {
    if(className != 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      top: 500,
      left: 0,
      display: 'block'
    });

    $(element).animate({
      top: 0
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  };

  var animateDown = function(element, className, done) {
    if(className != 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      left: 0,
      top: 0
    });

    $(element).animate({
      top: -500
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  };

  return {
    addClass: animateUp,
    removeClass: animateDown
  };
});

'use strict';

/* App Module */
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

'use strict';

var phonecatAnimations = angular.module('phonecatAnimations', ['ngAnimate']);

phonecatAnimations.animation('.phone', function() {

  var animateUp = function(element, className, done) {
    if(className != 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      top: 500,
      left: 0,
      display: 'block'
    });

    $(element).animate({
      top: 0
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  };

  var animateDown = function(element, className, done) {
    if(className != 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      left: 0,
      top: 0
    });

    $(element).animate({
      top: -500
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  };

  return {
    addClass: animateUp,
    removeClass: animateDown
  };
});

'use strict';

/* App Module */
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

'use strict';
/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl',
  ['$scope', '$routeParams', 'Phone',function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }
  ]);

'use strict';

/* Directives */

'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

'use strict';
/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource) {
    return $resource('phones/:phoneId.json',{},{
      query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
    });
  }]);

'use strict';
/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl',
  ['$scope', '$routeParams', 'Phone',function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }
  ]);

'use strict';

/* Directives */

'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

'use strict';
/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource) {
    return $resource('phones/:phoneId.json',{},{
      query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
    });
  }]);

angular.module("phonecatApp").run(["$templateCache", function($templateCache) {$templateCache.put("partials/phone-detail.html","<div class=phone-images><img ng-src={{img}} class=phone ng-repeat=\"img in phone.images\" ng-class=\"{active: mainImageUrl==img}\"></div><h1>{{phone.name}}</h1><p>{{phone.description}}</p><ul class=phone-thumbs><li ng-repeat=\"img in phone.images\"><img ng-src={{img}} ng-click=setImage(img)></li></ul><ul class=specs><li><span>Availability and Networks</span><dl><dt>Availability</dt><dd ng-repeat=\"availability in phone.availability\">{{availability}}</dd></dl></li><li><span>Battery</span><dl><dt>Type</dt><dd>{{phone.battery.type}}</dd><dt>Talk Time</dt><dd>{{phone.battery.talkTime}}</dd><dt>Standby time (max)</dt><dd>{{phone.battery.standbyTime}}</dd></dl></li><li><span>Storage and Memory</span><dl><dt>RAM</dt><dd>{{phone.storage.ram}}</dd><dt>Internal Storage</dt><dd>{{phone.storage.flash}}</dd></dl></li><li><span>Connectivity</span><dl><dt>Network Support</dt><dd>{{phone.connectivity.cell}}</dd><dt>WiFi</dt><dd>{{phone.connectivity.wifi}}</dd><dt>Bluetooth</dt><dd>{{phone.connectivity.bluetooth}}</dd><dt>Infrared</dt><dd>{{phone.connectivity.infrared | checkmark}}</dd><dt>GPS</dt><dd>{{phone.connectivity.gps | checkmark}}</dd></dl></li><li><span>Android</span><dl><dt>OS Version</dt><dd>{{phone.android.os}}</dd><dt>UI</dt><dd>{{phone.android.ui}}</dd></dl></li><li><span>Size and Weight</span><dl><dt>Dimensions</dt><dd ng-repeat=\"dim in phone.sizeAndWeight.dimensions\">{{dim}}</dd><dt>Weight</dt><dd>{{phone.sizeAndWeight.weight}}</dd></dl></li><li><span>Display</span><dl><dt>Screen size</dt><dd>{{phone.display.screenSize}}</dd><dt>Screen resolution</dt><dd>{{phone.display.screenResolution}}</dd><dt>Touch screen</dt><dd>{{phone.display.touchScreen | checkmark}}</dd></dl></li><li><span>Hardware</span><dl><dt>CPU</dt><dd>{{phone.hardware.cpu}}</dd><dt>USB</dt><dd>{{phone.hardware.usb}}</dd><dt>Audio / headphone jack</dt><dd>{{phone.hardware.audioJack}}</dd><dt>FM Radio</dt><dd>{{phone.hardware.fmRadio | checkmark}}</dd><dt>Accelerometer</dt><dd>{{phone.hardware.accelerometer | checkmark}}</dd></dl></li><li><span>Camera</span><dl><dt>Primary</dt><dd>{{phone.camera.primary}}</dd><dt>Features</dt><dd>{{phone.camera.features.join(\', \')}}</dd></dl></li><li><span>Additional Features</span><dd>{{phone.additionalFeatures}}</dd></li></ul>");
$templateCache.put("partials/phone-list.html","<div class=container-fluid><div class=row><div class=col-md-2>Search: <input ng-model=query> Sort by:<select ng-model=orderProp><option value=name>Alphabetical</option><option value=age>Newest</option></select></div><div class=col-md-10><ul class=phones><li ng-repeat=\"phone in phones | filter:query | orderBy:orderProp\" class=\"thumbnail phone-listing\"><a href=#/phones/{{phone.id}} class=thumb><img ng-src={{phone.imageUrl}}></a> <a href=#/phones/{{phone.id}}>{{phone.name}}</a><p>{{phone.snippet}}</p></li></ul></div></div></div>");}]);