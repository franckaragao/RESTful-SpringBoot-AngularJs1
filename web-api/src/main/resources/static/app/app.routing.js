appCliente.config(function($routeProvider, $locationProvider) {

	$routeProvider.when("/clientes", {
		templateUrl : 'app/components/cliente/clientes.html',
		controller : 'clientesController'
			
	}).when("/novoCliente", {
		templateUrl : 'app/components/cliente/cliente-edit.html',
		controller : 'clienteController'
			
	}).when("/viewCliente/:clienteId", {
		templateUrl : 'app/components/cliente/cliente-detail.html',
		controller : 'clienteController'	
			
	}).when("/editCliente/:clienteId", {
		templateUrl : 'app/components/cliente/cliente-edit.html',
		controller : 'clienteController'
	
	}).when("/", {
		templateUrl : 'app/components/login/login.html',
		controller: 'loginController'
			
	}).otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode(true);

});