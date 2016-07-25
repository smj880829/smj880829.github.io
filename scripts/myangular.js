var app = angular.module('myApp', []);

app.config(function($interpolateProvider,$httpProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('appCtl',['$scope', '$window','socket',  function($scope, $window,socket) {
  $scope.chat_logs = [];

  socket.emit('event');


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
  var socket = io.connect('https://ec2-54-199-240-31.ap-northeast-1.compute.amazonaws.com:8080' , {secure: true});
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
