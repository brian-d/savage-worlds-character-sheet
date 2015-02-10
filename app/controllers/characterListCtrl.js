'use strict'

var swApp = angular.module('swApp', []);

swApp.controller('characterListCtrl', function($scope, $http) {

  $http.get('data/characterList.json')
    .success(function(data) {
      $scope.characters = data;
    });
});
