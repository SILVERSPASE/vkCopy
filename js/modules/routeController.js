app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/mainPage.html'
    })
    .when('/myFriends', {
      templateUrl: 'templates/myFriends.html'
    })
    .when('/allPeople', {
      templateUrl: 'templates/allPeople.html'
    });

});