angular.module('clienteServices', ['ngResource'])

.factory('resourceFactory', function($resource) {
	
	var _private = $resource('/admin/clientes/:clienteId', null, {
		update : {
			method: 'PUT'
		}
	});
	var _public = $resource('/clientes/:clienteId', null);
	
	return {
		public: _public,
		private: _private
	};
})

.service('clienteService', function(resourceFactory){
	
	this.saveCliente = function(cliente){
		return resourceFactory.public.save(cliente);
	};
	
	this.updateCliente = function(cliente) {
		return resourceFactory.private.update(cliente);
	};
	
	this.getById = function(clienteId){
		return resourceFactory.private.get({clienteId: clienteId});
	};
	
	this.findAll = function() {
		return resourceFactory.private.query();
	};
	
	this.remove = function(clienteId) {
		return resourceFactory.private.delete({clienteId: clienteId});
	};

});