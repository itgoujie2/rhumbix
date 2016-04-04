var mainModule = angular.module('mainModule', [])

	.controller('MainCtrl', function($http, $scope){
		$scope.loadingNews = true;
		$http.get('/news')
			.success(function(results){
				var results = JSON.parse(results);
				$scope.newsList = results.results;
				$scope.loadingNews = false;
			})
			.error(function(err){
				console.log('errors: ' + err);
				$scope.loadingNews = false;
			})

		$scope.loadMore = function(){
			
			$http.get('/news/more?offset=' + $scope.newsList.length)
				.success(function(results){
					var results = JSON.parse(results);
					$scope.newsList = $scope.newsList.concat(results.results);
					
				})
				.error(function(err){
					console.log('errors: ' + err);
					
				})
		}
	})

