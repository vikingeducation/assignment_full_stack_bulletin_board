"use strict";
app.factory('CommentsService', ['Restangular', function(Restangular){

	var obj = {};

	obj.getAllComments = function() {
		return Restangular.all('comments').customGET('all');
	}

	obj.getComments = function(){
		return Restangular.all('comments').getList();
	};

	obj.getPostComments = function(post_id){
		return Restangular.all('comments').getList({post_id: parseInt(post_id)})
	}

	return obj;

}]);
