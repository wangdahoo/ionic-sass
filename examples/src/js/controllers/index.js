define(['app.controllers'], function (appControllers) {

  console.info('Index Controller');

  appControllers
    .controller('IndexCtrl', ['$scope', '$pageList', function ($scope, $pageList) {

      $scope.title = 'Components';

      $scope.pages = $pageList.all();

    }]);

});
