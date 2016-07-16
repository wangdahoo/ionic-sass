define(['app.controllers'], function (appControllers) {

  console.info('Page Header Controller');

  appControllers
    .controller('PageHeaderCtrl', ['$scope', function ($scope) {

      $scope.title = 'Header'

    }]);

});
