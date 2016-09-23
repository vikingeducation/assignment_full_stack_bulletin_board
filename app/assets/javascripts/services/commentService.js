bulletinBoard.factory('commentService', 
	['Restangular', '_', function(Restangular, _) {

	var service = {};

	service.createComment = function(params) {
		return Restangular.all('comments').post({
			comment: {
				author: params.author,
				body: params.body,
				post_id: params.postId,
				score: 0
			}
		})
	}

	Restangular.extendModel('comments', function(model) {
		
		model.upVote = function() {
			model.score++;
			model.put();
			return true;
		}

		model.downVote = function() {
			model.score--;
			model.put();
			return true;
		}

		return model;
	})



	service.getComments = function() {
		return Restangular.all('comments').getList();
	}

	return service;

}])