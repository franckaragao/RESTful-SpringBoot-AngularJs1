appCliente.controller('SignUpController', function ($scope, $http, growl, $location, signupService) {
	
	$scope.user = {};
	
	$scope.signup= function(){
		signupService.signup($scope.user, function(response) {
			$location.path('#/login');
			growl.success("user saved with success.");
		});

	}
	
});
