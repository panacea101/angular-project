function DropdownCtrl($scope) {
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
}
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