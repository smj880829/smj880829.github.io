var app = angular.module('myApp', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

app.controller('appCtl',['$scope', '$window','socket',  function($scope, $window,socket) {
  $scope.chat_logs = [];

  socket.emit('find_chatlog');


  $scope.insertmsg_angular = function(){
    var query = {'message' : $scope.msg};
      socket.emit('insert_chatlog', query);
      $scope.msg ="";

      socket.emit('find_chatlog');
    }

  socket.on('replace_chatlog', function (data) {
    socket.emit('find_chatlog');
  });

  socket.on('chat_logs', function (data) {
    $scope.chat_logs = data;
  });

}]
)


app.factory('socket', function ($rootScope) {
  var socket = io.connect('https://smj880829.github.io/');
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
})

app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
})
