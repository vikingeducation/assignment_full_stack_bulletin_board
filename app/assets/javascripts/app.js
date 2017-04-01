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
        },
        "recent-comments": {
          templateUrl: '/templates/recentComments.html',
          controller: "recentCommentsCtrl"
        }
      } 
    })
    .state('posts.index', {
      url: '/index',
      views: {
        "@posts": {
          templateUrl: '/templates/postsIndex.html',
          controller: "postsCtrl"             
        }
      }
    })
    .state('posts.show', {
      url: '/:id',
      views: {
      "@posts": {
            templateUrl: "/templates/postsShow.html",
            controller: "postsShowCtrl" }       
      },
      resolve: {
          post: ['Restangular', '$stateParams',
                  function(Restangular, $stateParams){
                    return Restangular.one('posts', $stateParams.id).get();
                }]
      }
    })
})

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});