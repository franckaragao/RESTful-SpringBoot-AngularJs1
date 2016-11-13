appCliente.controller('clienteController', function($scope, clienteService, $location, $routeParams, growl) {

	$scope.cliente = {};

	$scope.salvarCliente = function(cliente) {

		if ($scope.frmCliente.$valid) {
			if ($scope.cliente.id) {
				
				clienteService.updateCliente(cliente).$promise.then(
				function(value) {
					$location.path('/clientes')
					growl.success("Cliente atualizado com sucesso!");

				}, function(error) {

				});

			} else {
				clienteService.saveCliente(cliente).$promise.then(

				function(value) {
					$location.path('/clientes')
					growl.success("Cliente salvo com sucesso!");

				}, function(error) {

				});
			}
		} else {
			growl.error("Cliente inválido!");
		}
	};

	$scope.cancelarAlteracao = function() {
		$location.path('/clientes')
	}

	if ($routeParams.clienteId) {
		clienteService.getById($routeParams.clienteId).$promise.then(
			function(cliente) {
				$scope.cliente = cliente;

			}, function(response) {
				console.log("Erro na requisição " + response);
			});
	}

});