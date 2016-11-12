appCliente.config(function($routeProvider, $locationProvider) {

	$routeProvider.when("/clientes", {
		templateUrl : 'view/cliente/clientes.html',
		controller : 'clienteController'
			
	}).when("/novoCliente", {
		templateUrl : 'view/cliente/cliente-edit.html',
		controller : 'ClienteEditController'
			
	}).when("/clientes/:clienteId", {
		templateUrl : 'view/cliente/cliente-detail.html',
		controller : 'clienteDetailController'	
	
	}).when("/", {
		templateUrl : 'view/login.html',
		controller: 'loginController'
			
	}).otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode(true);

});