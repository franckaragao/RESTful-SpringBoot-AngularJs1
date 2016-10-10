var appClient = angular.module("appClient", []);

appClient.controller('indexController', function($scope, $http) {
	
	$scope.clientes = [];
	
	$http({
		method: 'GET',
		url: 'http://localhost:8080/clientes'
		
	}).then(function onSuccessCallBack(response){
		$scope.clientes = response.data;
	}, 
	
	function onErrorCallBack(response){
		
	});

});