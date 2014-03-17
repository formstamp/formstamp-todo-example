'use strict';

var app = angular.module('formstamp-todo-example', ['formstamp']);

app.controller('TodoController', function($scope) {
  $scope.labels = [ 'bug', 'duplicate', 'enhancement', 'invalid', 'question' ]
  $scope.users = [
    'Riddle', 'Moroianu', 'Jordan', 'Haring',
    'Patten', 'Lichten', 'Horne',
    'Wiener', 'Peabody', 'Bachelard', 'Mitropoulos',
    'Lafler', 'Cho', 'Chavez' ];

  $scope.todos = [
    { "startDate": "2014-03-17T13:33:24.694Z",
      "title": "Make a coffee",
      "shortDescription": "One cup of coffee, two cups of sugar and half water",
      "assignTo": "Jordan",
      "labels": [ "enhancement" ],
      "watchers": [ "Lichten", "Moroianu" ]
    },
    { "startDate": "2014-03-17T13:33:24.694Z",
      "title": "Add I18n support",
      "shortDescription": "Add I18n support to formstamp. Now!",
      "assignTo": "Kerry",
      "labels": [ "enhancement", "bug" ],
      "watchers": [ "Ivan", "Joshua" ]
    }
  ]

  var defaultTodo = {
    startDate: new Date()
  }
  $scope.todo = angular.copy(defaultTodo)

  $scope.addTodo = function() {
    $scope.todos.push(angular.copy($scope.todo))
    $scope.todo = angular.copy(defaultTodo)
    $scope.showForm = false
  }
})
