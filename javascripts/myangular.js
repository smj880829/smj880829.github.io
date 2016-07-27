var app = angular.module('myApp', ['ngAnimate','ngScrollable']);

app.config(function($interpolateProvider,$httpProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

});

app.controller('appCtl',['$scope', '$window','socket','$anchorScroll','$location',  function($scope, $window,socket,$anchorScroll,$location) {
  $scope.chat_logs = []
  socket.emit('init_chat_log');

  $scope.gotoBottom = function() {
    $location.hash('chat_bottom');
    $anchorScroll();
  }

  $scope.chat_push = function(){
    socket.emit('insert_chatlog',{'message' : $scope.message,'user':'client'});
    $scope.chat_logs.push({"message": $scope.message,'user':'client','ali':'right'})
    $scope.message ="";
    $scope.gotoBottom();
    }

  $scope.chat_pop = function(){
      $scope.chat_logs.shift();
    }

    $scope.init_chat_log = function(){
      socket.emit('init_chat_log');
      }

      socket.on('alert_msg', function (data) {
        $window.alert(data.msg)
      });

      socket.on('new_chat_log', function (data) {
        if(data.user == 'client')
          data.ali = 'right'
        else
          data.ali = 'left'

        $scope.chat_logs.push(data)
        $scope.gotoBottom();
      });

      socket.on('chat_logs', function (data) {
        $scope.chat_logs = data
        for(var i in data)
        {
          if(data[i].user == 'client')
            data[i].ali = 'right'
          else
            data[i].ali = 'left'
        }
        $scope.chat_logs.reverse();
      });

  }]
)


app.factory('socket', function ($rootScope) {
  var socket = io.connect('https://54.199.240.31' , {secure: true});
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

app.filter('reverse', function() {
return function(items) {
  return items.slice().reverse();
};
});
