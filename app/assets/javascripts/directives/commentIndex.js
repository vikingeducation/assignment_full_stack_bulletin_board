App.directive("commentIndex",[ function() {

  return {
    restrict: "E",
    templateUrl: "/templates/directives/commentIndex.html",
    scope: {
      comment: "="
    }

  }

}])
