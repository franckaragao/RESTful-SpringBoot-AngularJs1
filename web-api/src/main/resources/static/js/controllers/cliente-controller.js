appCliente.controller('clienteController', function($scope, $http, $location, $routeParams, growl) {

	$scope.cliente = {};
	
	$scope.salvarCliente = function(cliente) {
		
		if($scope.frmCliente.$valid){
			if($scope.cliente.id){
				$http({
					method : 'PUT',
					url : '/clientes',
					data : cliente,
		
				}).then(function onSuccessCallBack(response) {
					$location.path('/clientes')
					growl.success("Cliente atualizado com sucesso!");
				},
		
				function onErrorCallBack(response) {
		
				});
				
			}else{
				$http({
					method : 'POST',
					url : '/clientes',
					data : cliente,
		
				}).then(function onSuccessCallBack(response) {
					$location.path('/clientes')
					growl.success("Cliente salvo com sucesso!");
				},
		
				function onErrorCallBack(response) {
				});
			}
		}else{
			growl.error("Cliente inválido!");
		}
	};
	
	$scope.cancelarAlteracao = function() {
		$location.path('/clientes')

	}
	
	if($routeParams.clienteId){
		$http.get("/clientes/"+$routeParams.clienteId).then(function (response){
			$scope.cliente= response.data;
			
		}, function (response){
			console.log("Erro na requisição "+response);
			
		});
	}

});