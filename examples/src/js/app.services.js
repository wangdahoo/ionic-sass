define([
  'bezier',
  'angular',
  'angular-animate',
  'angular-sanitize',
  'ui-router',
  'services/page.list'
], function (bezier, _angular, ngAnimate, ngSanitize, uiRouter, pageList) {
  console.info('App Services Load!');

  return angular
    .module('appServices', ['ngAnimate', 'ngSanitize', 'ui.router'])

    .factory('$pageList', [function () {
      return pageList;
    }])

    ;
});
