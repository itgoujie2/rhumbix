var mainModule = angular.module('mainModule', [])

	.controller('MainCtrl', function($http, $scope, $sce){
		
		$http.get('/gif')
			.success(function(results){
				var result = JSON.parse(results);
				console.log(JSON.stringify(result.data[0].embed_url));
				$scope.gif = $sce.trustAsResourceUrl(result.data[0].embed_url);
				console.log('the gif: ' + $scope.gif);
			})

		$scope.search = function(){

			console.log('search: ' + $scope.searchText);
			
			$http.get('/gif/search?query=' + $scope.searchText)
					.success(function(results){
						var result = JSON.parse(results);
						console.log(JSON.stringify(result.data[0].embed_url));
						$scope.gif = $sce.trustAsResourceUrl(result.data[0].embed_url);
						
					})
					.error(function(err){
						console.log('errors: ' + err);
						
					})
		}

		
	})

