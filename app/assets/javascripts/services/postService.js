bulletinBoard.factory('postService', 
	['Restangular', '_', '$q', function(Restangular, _, $q) {

	var service = {};

	var _posts = [];

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

	service.getPost = function(id) {
		var searchedPost = {};
		return _fetchPosts()
			.then(function(posts) {

			// var post = _.findWhere(_posts, {id: id});

			var post;
			id = parseInt(id);

			for (var i = 0; i < posts.length; i++) {
				if ( posts[i].id === id ) {
					post = posts[i];
					break;
				}
			}

			if (post) {
				console.log(post);
				return post;
			} else {
				return undefined;
			}
		})
	}

	service.getAllPosts = function() {
		return _fetchPosts();
	}

	_fetchPosts = function() {
		return Restangular.all('posts').getList();
	}



	return service;
}])