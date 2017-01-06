var appCliente = angular.module("appCliente", [ 'clienteServices',
		'appDirectives', 'ngRoute', 'angular-growl', 'ngAnimate',
		'ui.bootstrap', 'dialogs.default-translations', 'dialogs.main' ]);

/**
 * Registra token no cabeçalho HTTP
 */
appCliente.config(function($httpProvider) {
	$httpProvider.interceptors.push("tokenInterceptor");
});

appCliente.run([ '$rootScope', '$location', function($rootScope, $location) {

	$rootScope.disableBtnAdmin = function() {
		return localStorage.getItem("adminToken");
	}

	$rootScope.logoutAdmin = function() {
		localStorage.clear();
	}

	$rootScope.$on('$locationChangeStart', function(event, next, current) {

		if (localStorage.getItem("adminToken")) {
			if ($location.path() === '/') {
				$location.path('/clientes');
			}
		}
	});
} ]);
