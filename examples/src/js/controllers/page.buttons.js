define(['app.controllers'], function (appControllers) {

  console.info('Page Buttons Controller');

  appControllers
    .controller('PageButtonsCtrl', ['$scope', function ($scope) {

      $scope.title = 'Buttons';



    }]);

});
