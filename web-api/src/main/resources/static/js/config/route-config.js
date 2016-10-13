appCliente.config(function($routeProvider) {
	
	$routeProvider
		.when("/clientes", {templateUrl: '/view/cliente/clientes.html',controller: 'clienteController'})
		.otherwise({redirectTo: '/'});
	
});