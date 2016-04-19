require('@dr/angularjs');
require('@dr/ui-router');

var state = require('../../browser/view/state.html');

var drHome = angular.module('drHome', ['ui.router']);

module.exports = {
	bootstrap: bootstrap,
	name: drHome.name
};

drHome.config([
	'$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('state', {
				url: '/state',
				template: state
			})
			.state('state.list', {
				url: '/list',
				templateUrl: '/example-home/partials/state.list.html',
				controller: ['$scope', function($scope) {
					$scope.items = ['A', 'List', 'Of', 'Items'];
				}]
			});
	}
]);

require('./controllers/HomeMainController')(drHome);

function bootstrap(moduleName) {
	angular.module(moduleName).constant('packageName', moduleName);
	angular.element(document).ready(function() {
		angular.bootstrap(document, [moduleName]);
	});
}
