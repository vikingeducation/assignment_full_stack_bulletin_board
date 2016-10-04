"use strict";
app.factory('CommentsService', ['Restangular', function(Restangular){

	var obj = {};

	obj.getRecentComments = function(){
		return Restangular.all('comments').getList();
	};

	return obj;

}]);