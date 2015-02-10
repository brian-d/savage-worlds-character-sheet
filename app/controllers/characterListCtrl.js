'use strict'

var swApp = angular.module('swApp', []);

swApp.controller('characterListCtrl', function($scope) {
  $scope.characters = [
    { name: 'Krull', setting: 'Fantasy', archtype: 'Warrior', description: 'Dual weilding berzerker type character' },
    { name: 'C0MR4D3', setting: 'Shadowrun', archtype: 'Decker', description: 'Russian decker archtype specializing in fighting ICE instead of avoiding it' },
    { name: 'Sir Nastypants', setting: 'Superhero', archtype: 'Brawler', description: 'Your average punchy superhero' }
  ];
});
