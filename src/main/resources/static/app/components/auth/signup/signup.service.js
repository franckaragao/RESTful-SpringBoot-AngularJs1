
/**
 * @ngdoc service
 * @name Sign up Service
 *
 * @description
 * This is the sig up service.
 *
 * @author <a href="https://github.com/FranckAJ">Franck Aragão</a>
 **/
angular.module("appCliente").factory("signupService", function($http) {

    var _signup = function(user, callback) {
        return $http.post("users", user).then(function(response) {
            callback(response.data);
        });
    };

    return {
    	signup: _signup
    }

});