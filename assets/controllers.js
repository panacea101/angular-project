var app = angular.module('myProject', ['ui.bootstrap']);

app.config(function($stateProvider, $routeProvider){
    $stateProvider
        .state('index', {
            url: "",
            views: {
                "viewA": {
                    templateUrl: "index.viewA.html"
                },
                "viewB": {
                    templateUrl: "index.viewB.html"
                }
            }
        })
        .state('route1', {
            url: "/route1",
            views: {
                "viewA": {
                    templateUrl: "route1.viewA.html"
                },
                "viewB": {
                    templateUrl: "route1.viewB.html"
                }
            }
        })
        .state('route2', {
            url: "/route2",
            views: {
                "viewA": {
                    templateUrl: "route2.viewA.html"
                },
                "viewB": {
                    templateUrl: "route2.viewB.html"
                }
            }
        })
    })
app.controller('TabsDemoCtrl', function ($scope) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];
});
app.controller ('DropdownCtrl',function ($scope) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    console.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});

 function GitHubCtrl($scope, $http) {
      $scope.getGitInfo = function () {
         $scope.userNotFound = false;
         $scope.loaded = false;

         $http.get("https://api.github.com/users/" + $scope.username)
               .success(function (data) {
                  if (data.name == "") data.name = data.login;
                  $scope.user = data;
                  $scope.loaded = true;
               })
               .error(function () {
                  $scope.userNotFound = true;
               });
         $http.get("https://api.github.com/users/" + $scope.username + "/repos").success(function (data) {
            $scope.repos = data;
            $scope.reposFound = data.length > 0;
         });
      }
  }
