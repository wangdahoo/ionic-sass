define([
  'angular',
  'angular-animate',
  'angular-sanitize',
  'ui-router'
], function () {
  console.info('App Services Load!');

  return angular
    .module('appServices', ['ngAnimate', 'ngSanitize', 'ui.router'])

    ;
});
