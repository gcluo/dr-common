var drHome = require('@dr/dr-home');

var app = angular.module(__api.packageShortName, [drHome.name]);
require('./MainController')(app);
drHome.bootstrap(__api.packageShortName);
