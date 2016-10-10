var appClient = angular.module("appClient", []);

appClient.controller('indexController', function($scope, $http) {
	
	$http({
		method: 'GET',
		url: 'http://localhost:8080/clientes'
		
	}).then(function onSuccessCallBack(response){
		console.log(response.data);
		console.log(response.status)
	}, 
	
	function onErrorCallBack(response){
		console.log(response.data);
		console.log(response.status)
	});

	
});