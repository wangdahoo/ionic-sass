define([
  'app.services',
  'controllers/index',
  'controllers/pages'
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

          // 按钮
          .state('pageButtons', {
            url: '/page/buttons',
            controller: 'PageButtonsCtrl',
            templateUrl: 'view/page_buttons.html'
          })

          // 表单
          .state('pageForms', {
            url: '/page/forms',
            controller: 'PageFormsCtrl',
            templateUrl: 'view/page_forms.html'
          })

          // 列表
          .state('pageLists', {
            url: '/page/lists',
            controller: 'PageListsCtrl',
            templateUrl: 'view/page_lists.html'
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
