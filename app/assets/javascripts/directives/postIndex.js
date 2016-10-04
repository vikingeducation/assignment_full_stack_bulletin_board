App.directive("postsIndex",[ function() {

  return {
    restrict: "E",
    templateUrl: "/templates/directives/postsIndex.html",
    scope: {
      post: "="
    }

  }

}])