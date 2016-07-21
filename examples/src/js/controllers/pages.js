define(['app.controllers'], function (appControllers) {

  console.info('Page Buttons Controller');

  appControllers
    .controller('PageButtonsCtrl', ['$scope', function ($scope) {
      $scope.title = 'Buttons';
    }])

    .controller('PageFormsCtrl', ['$scope', function ($scope) {
      $scope.title = 'Forms';

      // for item-floating-label effect
      $scope.userForm = {
        firstName: '',
        lastName: '',
        email: ''
      }

    }])

    .controller('PageListsCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
      $scope.title = 'List';

      var container = document.getElementsByClassName('overflow-scroll')[0];

      //container.onscroll = function (e) {
      //  console.log(e.srcElement.scrollTop);
      //};

      $scope.goTop = function () {
        var container = document.getElementsByClassName('overflow-scroll')[0];

        //var curve = new Bezier(10,100, 70,100, 10,100, 100,100); // ios page transition
        var curve = new Bezier(0,100, 70,100, 100,100);
        var LUT = curve.getLUT(40); // 10ms * 40
        var scrollTop = container.scrollTop;

        var i = 39;
        function animate() {
          $timeout(function () {
            if (i < 0) {
              container.scrollTop = 0;
            } else {
              container.scrollTop = LUT[i].x / LUT[i].y * scrollTop;
              i--;
              animate();
            }
          }, 10);
        }

        animate();
      }
    }])

  ;

});
