//IIFE function: But in short, 
//we want to make sure that no local variables bleed 
//into the global scope.
(function () {
    'use strict';
    //creates angular module that takes app name as first parameter
    //and an array of dependencies as a second parameter
    angular.module('myFirstApp', [])
    //construct responsible for a smaller portion of the page
    //$scope variable is a special variable to share data between viewmodel and view
    .controller('MyFirstController', function ($scope){
        $scope.name = 'Iheb';
        $scope.sayHello = function () {
            return "Hello Coursera";
        };

    });
})();