"use strict";
var app = angular.module('app', ['ui.router', 'restangular']);

app.factory('_', [
  '$window',
  function($window) {
    return $window._;
  }
]);

app.config([
  "$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = token;
  }
]);

// config for restangular
app.config([
  'RestangularProvider',
  function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({"content-type": "application/json"});
  }
]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/posts');

    $stateProvider.state('main', {
      abstract: true,
      url: '/main',
      views: {
        'recentComments': {
          templateUrl: 'templates/comments/recent.html',
          controller: 'RecentCommentsCtrl'
        }
      }
    })
    .state('main.posts', {
      url: '/posts',
      views: {
        'posts@content': {
          templateUrl: 'templates/posts/index.html',
          controller: 'PostsCtrl'
        }
      }
    })
    .state('main.post', {
      url: '/post/:id',
      views: {
        'post@content': {
          templateUrl: 'templates/posts/show.html',
          controller: 'ShowPostCtrl'
        }
      }
    });

  }
]);
