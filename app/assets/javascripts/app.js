bulletin = angular.module("bulletin", ['ui.router', 'restangular'])

.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/posts/index")

  $stateProvider
    .state('posts', {
      url: '/posts',
      views: {
        "": {
          templateUrl: '/templates/postsLayout.html'
        }
      }
      
    })
    .state('posts.index', {
      url: '/index',
      views: {
        "@posts": {
          templateUrl: '/templates/postsIndex.html',
          controller: "postsIndexCtrl"             
        },
        "recent-comments": {
          templateUrl: '/templates/recentComments.html',
          controller: "postsIndexCtrl"
        }
      }

    })
})

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});