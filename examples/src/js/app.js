define([
  'angular',
  'angular-animate',
  'angular-sanitize',
  'ui-router'
], function (angular) {

  var app = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'ui.router']);

  app.controller('HelloController', ['$scope', function ($scope) {

    $scope.message = 'hello!';

  }]);

  return app;
});