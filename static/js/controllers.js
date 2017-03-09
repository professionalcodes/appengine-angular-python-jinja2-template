'use strict';

var templateApp = templateApp || {};
var controllers = templateApp.controllers = angular.module('templateAppControllers', []);

/* RootCtrl handles all signin options */
controllers.controller('RootCtrl', ["$scope", function ($scope) {


	$scope.onload = function() {
		log("root controller loaded");
	};

	$scope.onload();

}]);
	