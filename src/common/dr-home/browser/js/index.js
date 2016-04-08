require('@dr/angularjs');

var drHome = angular.module('drHome', ['ngAnimate', 'ngRoute', 'ngSanitize']);
module.exports = {
	bootstrap: bootstrap,
	name: drHome.name
};

// drHome.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
// 	function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
//
// 	}
// ]);
// drHome
// .run(['$templateCache', function($templateCache) {
// 		$templateCache.put('screens.html', require('../views/screens.html'));
// 	}]);
require('./controllers/HomeMainController')(drHome);

function bootstrap(moduleName) {
	angular.module(moduleName).constant('packageName', moduleName);
	angular.element(document).ready(function() {
		angular.bootstrap(document, [moduleName]);
	});
}
