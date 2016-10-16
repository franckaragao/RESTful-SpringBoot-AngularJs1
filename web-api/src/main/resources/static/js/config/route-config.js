appCliente.config(function($routeProvider) {

	$routeProvider.when("/clientes", {
		templateUrl : '/view/cliente/clientes.html',
		controller : 'clienteController'
			
	}).when("/novoCliente", {
		templateUrl : '/view/cliente/cliente-edit.html',
		controller : 'ClienteEditController'
			
	}).otherwise({
		redirectTo : '/'
	});

});