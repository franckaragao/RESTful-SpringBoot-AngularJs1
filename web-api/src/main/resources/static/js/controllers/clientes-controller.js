appCliente.controller('clientesController', function($scope, clienteService, dialogs) {
	
	$scope.clientes = [];
	
	clienteService.findAll().$promise.then(
		function (clientes) {
			$scope.clientes = clientes;
		}, 
		function (response) {

	});

	$scope.removerCliente = function(cliente) {
		var dlg = dialogs.confirm('Remoção de Cliente', 'Deseja remover?');
		dlg.result.then(function(btn){
			remover(cliente);
		},function(btn){
		});
	};
	
	var remover = function(cliente) {
		clienteService.remove(cliente.id).$promise.then(
			function(response) {
				var index = $scope.clientes.indexOf(cliente);
				$scope.clientes.splice(index, 1);
			},
			function(response) {

		});
	};
});