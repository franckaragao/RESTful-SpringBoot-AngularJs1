appCliente.controller('clientesController', function($scope, $http) {
	
	$scope.clientes = [];
	
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
			url : '/clientes/' + cliente.id,

		}).then(function onSuccessCallBack(response) {

			var index = $scope.clientes.indexOf(cliente);
			$scope.clientes.splice(index, 1);
		},

		function onErrorCallBack(response) {

		});
	};
	
	getClientes();
});