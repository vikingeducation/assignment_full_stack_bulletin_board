var app = angular.module('app', [
  'ui.router',
  'restangular',

]);

app.constant('_', window._);

app.run(function ($rootScope) {
    $rootScope._ = window._;
 });


app.config( ['RestangularProvider', function(RestangularProvider) {

  // CSRF stuff
  // var token = $('meta[name=csrf-token]').attr('content');
  // $httpProvider
  //   .defaults
  //   .headers
  //   .common['X-CSRF-Token'] = token;

  // routing
  // $urlRouterProvider.otherwise('');

  // $stateProvider
  //   .state('messages', {
  //     url: '',
  //     templateUrl: '/templates/messages/index.html',
  //     controller: 'MessagesCtrl'
  //   });

  // Restangular
  RestangularProvider.setBaseUrl('/api/v1');
  // as part of the endpoint
  RestangularProvider.setRequestSuffix('.json');

  RestangularProvider.setDefaultHttpFields({
    "content-type": "application/json"
  });
  RestangularProvider.setResponseExtractor( function( response, operation ) {
    // it would have defaulted to response.data
    // but we wanted the first item.
    return response.data[0];
  });

}]);


app.controller('TestCtrl', ['Restangular', function(Restangular){

  // Restangular methods return promises..
  $scope.justAPromise = Restangular.all("users").getList();

  // ...but the `$object` property of that response
  //   is automatically updated to include the results
  //   when they are finally made available
  $scope.theActualUsers = Restangular.all('users').getList().$object;

  // ...or we can just use the old-fashioned way by
  //   hooking a callback up to
  Restangular.all('users').getList().then( function( users ){
    $scope.alsoTheUsers = users;
  });
}]);
