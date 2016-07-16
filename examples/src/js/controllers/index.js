define(['app.controllers'], function (appControllers) {

  console.info('Index Controller');

  appControllers
    .controller('IndexCtrl', ['$scope', function ($scope) {

      $scope.title = 'Index Page'

    }]);

});
