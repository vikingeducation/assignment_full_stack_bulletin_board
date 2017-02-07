App.factory('RatingService', function(){
  var RatingService = {};

  RatingService.upvote = function(comment){
    return comment.rating + 1;
  }

  RatingService.downvote = function(comment){
    return comment.rating - 1;
  }


  return RatingService;

});
