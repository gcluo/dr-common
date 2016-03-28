module.exports = function(module) {
	module.controller('mainController', ['$scope', HomeMainController]);
};

function HomeMainController($scope) {
	var mainVm = this;
	mainVm.title = ('@dr/dr-common');
}
