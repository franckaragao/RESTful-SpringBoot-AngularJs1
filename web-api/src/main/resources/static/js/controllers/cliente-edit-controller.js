appCliente.controller('ClienteEditController', function ($scope, $http, $location, growl) {
	
	$scope.salvarCliente = function(cliente) {
		
		if($scope.frmCliente.$valid){
			$http({
				method : 'POST',
				url : 'http://localhost:8080/clientes',
				data : cliente,
	
			}).then(function onSuccessCallBack(response) {
				$location.path('/clientes')
			},
	
			function onErrorCallBack(response) {
	
			});
		}else{
			growl.error("Ups, error message here!");
		}
	};
	
	$scope.cancelarAlteracao = function() {
		$location.path('/clientes')

	}
	
});