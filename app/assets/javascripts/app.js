bulletin = angular.module("bulletin", ['ui.router', 'restangular'])


.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/posts.index")

  $stateProvider
    .state('posts', {
      url: '/posts',
      templateUrl: '/templates/postsLayout.html'
    })
    .state('posts.index', {
      url: '/posts/index',
      templateUrl: '/templates/postsIndex.html',
      controller: "PostsIndexCtrl"
    })
})

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});