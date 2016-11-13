appCliente.controller('clienteController', function($scope, $http, $location, growl) {

	$scope.clientes = [];
	$scope.cliente = {};
	
	$scope.salvarCliente = function(cliente) {
		
		if($scope.frmCliente.$valid){
			$http({
				method : 'POST',
				url : 'http://localhost:8080/clientes',
				data : cliente,
	
			}).then(function onSuccessCallBack(response) {
				$location.path('/clientes')
				growl.success("Cliente salvo com sucesso!");
			},
	
			function onErrorCallBack(response) {
	
			});
			
		}else{
			growl.error("Cliente inválido!");
		}
	};
	
	$scope.cancelarAlteracao = function() {
		$location.path('/clientes')

	}

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
		$location.path('/novoCliente')
		$scope.cliente = angular.copy(c);
	}
	
	getClientes();

});