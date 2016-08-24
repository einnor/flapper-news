angular.module('flapperNews')
  .controller('MainCtrl', ['$scope', 'posts',function($scope, posts){
      $scope.posts = posts.posts;

      $scope.addPost = function(){
        if(!$scope.title || $scope.title === ''){ return; }
        posts.create({
          title: $scope.title,
          link: $scope.link,
          summary: $scope.summary
        });
        $scope.title = '';
        $scope.link = '';
        $scope.summary = '';
      }

      $scope.incrementUpvotes = function(post){
        posts.upvote(post);
      }
    }
  ]);
