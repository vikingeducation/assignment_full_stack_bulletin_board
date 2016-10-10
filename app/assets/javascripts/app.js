var fullStackBB = angular.module("fullStackBB", ['ui.router', 'restangular'])



fullStackBB.config([
  "$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = token;
  }
]);

fullStackBB.config([
  'RestangularProvider',
  function(RestangularProvider) {

    //RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({"content-type": "application/json"});
  }
]);





fullStackBB.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("posts", {
      url: "/",
      views: {
        "": {
          templateUrl: "templates/posts/index.html",
          controller: "PostsCtrl" 
        },

        "recent-comments@": {
          templateUrl: "templates/comments/recent_comments.html",
          controller: "RecentCommentsCtrl"
        }
      }
    })


    .state("posts.show", {
      url: "posts/:id", 
      views: {
        "@": {
          templateUrl: "templates/posts/show.html",
          controller: "PostShowCtrl"
        },

        "recent-comments@": {
          templateUrl: "templates/comments/recent_comments.html",
          controller: "RecentCommentsCtrl"
        }
      }
    })
})




fullStackBB.factory("_", ['$window', function($window){
  return $window._;
}]);