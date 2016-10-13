appCliente.controller('ModalController', function ($scope, ngDialog) {
	$scope.openContactForm = function() {
		ngDialog.openConfirm({template: '/view/cliente/cliente-edit.html',
		  scope: $scope 
		}).then(
			function(value) {
			},
			function(value) {
			}
		);
	};
});