module.exports = function(module) {
	module.controller('mainController', ['$scope', MainController]);
};

function MainController($scope) {
	var mainVm = this;
	mainVm.time = new Date().getTime();
}
