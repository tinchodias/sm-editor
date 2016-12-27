'use strict';

var app = angular.module('app', ['ui.router', 'wu.masonry', 'angularLazyImg']);


app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider

    .state('home', {
      url: "/",
      templateUrl: "home.html"
    })

    .state('page', {
      url: "/:page",
      templateUrl: "photos.html",
      controller: "PhotosCtrl as photosCtrl",
      resolve: {
        pageData: function ($stateParams, $http, $q) {
          var url = '//socialmirror-a8d8f.firebaseio.com/public/' + $stateParams.page + '.json';
          return $http.get(url).then(function(response) {
            console.log("now");
            console.log(response);
            return response.data;
          });
        }
      }
    })

});


app.run(function($rootScope) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
    $rootScope.stateLoading = true;
  });
  
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $rootScope.stateLoading = false;
  });

  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) { 
    console.log(error);
  });

})
