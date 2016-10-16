appCliente.controller('clienteController', function($scope, $http) {

	$scope.clientes = [];
	$scope.cliente = {};

	var getClientes = function() {
		$http({
			method : 'GET',
			url : 'http://localhost:8080/clientes'

		}).then(function onSuccessCallBack(response) {
			$scope.clientes = response.data;
		},

		function onErrorCallBack(response) {

		});
	};

	$scope.removerCliente = function(cliente) {
		$http({
			method : 'DELETE',
			url : 'http://localhost:8080/clientes/' + cliente.id,

		}).then(function onSuccessCallBack(response) {

			var index = $scope.clientes.indexOf(cliente);
			$scope.clientes.splice(index, 1);
		},

		function onErrorCallBack(response) {

		});
	};

	$scope.updateClientes = function(c) {
		$scope.cliente = angular.copy(c);
	}


	getClientes();

});