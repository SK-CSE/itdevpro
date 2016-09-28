angular.module('TestSail',[]);
angular.module('TestSail').controller('homeCtrl',['$scope','$http',function ($scope,$http){

	/*$http.get('/user').then(function(res){
		console.log(res);
		$scope.data = res.data;

	});*/

	io.socket.get('/user',function(res){
		console.log(res);
		$scope.data = res;
		$scope.$apply();
	});

	io.socket.on('user', function(event){
		switch(event.verb){
			case 'created':
			$scope.data.push(event.data);
			$scope.$apply();
			break;
		}
	});

	/*$scope.data = [{
	  name : "saurabh"
	},
	{
	  name : "anant"
	},
	{
	  name : "madhukar"
	}];*/

}]);