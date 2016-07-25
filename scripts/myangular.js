var app = angular.module('myApp', ['ngAnimate']);

app.config(function($interpolateProvider,$httpProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

});

app.controller('appCtl',['$scope', '$window','socket','$anchorScroll','$location',  function($scope, $window,socket,$anchorScroll,$location) {
  $scope.logs = []

  $scope.gotoBottom = function() {
    $location.hash('chat_bottom');
    $anchorScroll();
  }

  $scope.chat_push = function(){
    $scope.logs.push({"message": $scope.message})
    $scope.message ="";
    $scope.gotoBottom();
    }

  $scope.chat_pop = function(){
      $scope.logs.shift();
    }

    $scope.send_server = function(){
        socket.emit('wow');
      }

      socket.on('wow', function (data) {
        $window.alert(data)
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
