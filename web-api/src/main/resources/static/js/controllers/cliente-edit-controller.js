appCliente.controller('ClienteEditController', function ($scope, $http, $location, growl) {
	
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
	
});