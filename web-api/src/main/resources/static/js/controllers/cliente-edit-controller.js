appCliente.controller('ClienteEditController', function ($scope, $http, $location) {
	
	$scope.salvarCliente = function(cliente) {
		$http({
			method : 'POST',
			url : 'http://localhost:8080/clientes',
			data : cliente,

		}).then(function onSuccessCallBack(response) {
			$location.path('/clientes')
		},

		function onErrorCallBack(response) {

		});
	};
	
	$scope.cancelarAlteracao = function() {
		$location.path('/clientes')

	}
	
});