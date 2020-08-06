(function(){
    'use strict';

    angular.module('LunchCheck', [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope){
        $scope.name = '';
        $scope.message = '';
        $scope.check = function (){
            var words = $scope.name;
            var LunchArray = words.split(',');
            console.log(LunchArray.length);
            if (LunchArray.length <= 4 && LunchArray.length != 1){
                $scope.message = 'Enjoy!';
            }
            else if (LunchArray.length > 4){
                $scope.message = 'Too Much';
            }
            else if (LunchArray.length == 1) {
                $scope.message = 'Please enter data';
            }
        }
    };

})()