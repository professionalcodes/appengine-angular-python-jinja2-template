var app = angular.module("templateApp", ["templateAppControllers", "ngRoute"]);

/* routing configuration for production */
var routeConfig = function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/'
    });
};

routeConfig.$inject = ["$routeProvider"];
app.config(routeConfig);

