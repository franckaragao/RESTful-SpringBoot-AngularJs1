appCliente.config(function($routeProvider) {

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
	
	}).when("/login", {
		templateUrl : 'app/components/auth/login/login.html',
		controller: 'loginController'

	}).when("/signup", {
		templateUrl : 'app/components/auth/signup/signup.html',
		controller: 'SignUpController'
			
	}).otherwise({
		redirectTo : '/'
	});

});