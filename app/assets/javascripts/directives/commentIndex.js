App.directive("commentIndex",["CommentsService", function(CommentsService) {

  return {
    restrict: "E",
    templateUrl: "/templates/directives/commentIndex.html",
    scope: {
      comment: "="
    },

    link: function(scope) {

      scope.upVote = function() {
        CommentsService.updateVote(scope.comment, 1)
      }
      scope.downVote = function() {
        CommentsService.updateVote(scope.comment, -1)
      }
    }
  }

}])
