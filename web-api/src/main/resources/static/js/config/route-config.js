appCliente.config(function($routeProvider, $locationProvider) {

	$routeProvider.when("/clientes", {
		templateUrl : 'view/cliente/clientes.html',
		controller : 'clientesController'
			
	}).when("/novoCliente", {
		templateUrl : 'view/cliente/cliente-edit.html',
		controller : 'clienteController'
			
	}).when("/viewCliente/:clienteId", {
		templateUrl : 'view/cliente/cliente-detail.html',
		controller : 'clienteController'	
			
	}).when("/editCliente/:clienteId", {
		templateUrl : 'view/cliente/cliente-edit.html',
		controller : 'clienteController'
	
	}).when("/", {
		templateUrl : 'view/login.html',
		controller: 'loginController'
			
	}).otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode(true);

});