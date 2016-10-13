var appClient = angular.module("appClient", []);

appClient.controller('indexController', function($scope, $http) {

	$scope.clientes = [];
	$scope.cliente = {};

	var getClientes = function(){
		$http({
			method: 'GET',
			url: 'http://localhost:8080/clientes'

		}).then(function onSuccessCallBack(response){
			$scope.clientes = response.data;
		},

		function onErrorCallBack(response){

		});
	};

	$scope.salvarCliente = function(){
		$http({
			method: 'POST',
			url: 'http://localhost:8080/clientes',
			data: $scope.cliente,

		}).then(function onSuccessCallBack(response){
			$scope.clientes.push(response.data);
		},

		function onErrorCallBack(response){

		});
	};
	
	$scope.removerCliente = function(cliente){
		$http({
			method: 'DELETE',
			url: 'http://localhost:8080/clientes/'+cliente.id,

		}).then(function onSuccessCallBack(response){
			
			var index = $scope.clientes.indexOf(cliente);
			$scope.clientes.splice(index, 1);
		},

		function onErrorCallBack(response){

		});
	};
	getClientes();

});
