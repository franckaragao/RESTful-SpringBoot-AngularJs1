appCliente.controller('loginController', function ($scope, $http, $location, growl) {
	
	$scope.user = {};
	
	$scope.login= function(){
		
		$http.post("/login", $scope.user).then(function(response){
			localStorage.setItem("adminToken", response.data.token);
			
		} , function(response){
		});
	}
});
