bulletinBoard.factory('postService', 
	['Restangular', function(Restangular) {

	var service = {};

	var _posts;

	service.createPost = function(params) {
		return Restangular.all('posts').post({
			post: {
				title: params.title,
				author: params.author,
				body: params.body
			}
		})
		.then(function(post) {
			_posts.push(post);
			console.log('added new post : ' + post);
		}, function(response) {
			console.error(response);
		})
	}

	service.getPosts = function() {
		if (_posts) {
			return _posts;
		} else {
			return _posts = Restangular.all('posts').getList().$object;
		}
	}



	return service;
}])