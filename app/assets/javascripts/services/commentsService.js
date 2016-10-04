"use strict";
app.factory('CommentsService', ['Restangular', function(Restangular){

	var obj = {};

	obj.createComment = function(commentData) {
		commentData.date = new Date();
		var newComment = {
			comment: commentData
		}
		return Restangular.all('comments').post(newComment);
	}

	obj.getAllComments = function() {
		return Restangular.all('comments').customGET('all');
	};

	obj.getComments = function(){
		return Restangular.all('comments').getList();
	};

	obj.getPostComments = function(post_id){
		return Restangular.all('comments').getList({post_id: parseInt(post_id)});
	};

	obj.upvote = function(comment){
		comment.voteCount += 1;
		return comment.put();
	};

	obj.downvote = function(comment){
		comment.voteCount -= 1;
		return comment.put();
	};


	return obj;

}]);
