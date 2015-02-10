angular.module('swApp', [])
  .controller('characterListCtrl', function($scope, $http) {
    'use strict';

    $http.get('data/characterList.json')
      .success(function(data) {
        $scope.characters = data;
      });
  });
