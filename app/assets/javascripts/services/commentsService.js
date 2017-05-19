app.factory('commentsService', ['Restangular', '_', function(Restangular, _) {

    var _comments;
    var commentsService = {};

    commentsService.all = function() {
      _comments = Restangular.all('comments').getList().$object;
      return _comments;
    };

    return commentsService;

  }
]);
