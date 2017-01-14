appCliente.factory("tokenInterceptor", function($q, $location){
	
	return {
		
		'request': function(config){
			
			config.headers.Authorization = 'Bearer ' + localStorage.getItem("adminToken");  
		
			return config;
		},
		
		  'responseError': function (rejection){
	    	if(rejection.status==401){
	    		localStorage.clear();
	    		$location.path("/login");
	    	}
	    	return rejection;
	    }
	};
	
});