define([
  'app.services',
  'controllers/index',
  'controllers/page.buttons'
], function () {

  var app = angular.module('myApp', ['appServices', 'appControllers']);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider

        //.decorator('views', function (state, parent) {
        //  var result = {}, views = parent(state);
        //  angular.forEach(views, function (config, name) {
        //    if (config.templateName)
        //      config.templateUrl = function () {
        //        return 'view/' + config.templateName + '.html';
        //      };
        //
        //    result[name] = config;
        //  });
        //  return result;
        //})

        // 首页
          .state('pages', {
            url: '/pages',
            controller: 'IndexCtrl',
            templateUrl: 'view/index.html'
          })

          // Header
          .state('pageHeader', {
            url: '/page/header',
            controller: 'PageButtonsCtrl',
            templateUrl: 'view/page_buttons.html'
          })

        ;

        $urlRouterProvider.otherwise('/pages');
        //$locationProvider.html5Mode(true);

      }])

    .run(['$rootScope', function ($rootScope) {

      $rootScope.loaded = true;

    }])
  ;

  return app;
});
