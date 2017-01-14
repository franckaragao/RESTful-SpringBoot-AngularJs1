angular.module('appDirectives', [])
	.directive('btnRemove', function() {
		
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            name: '@',
            action : '&'
        }
        ddo.template = '<button class="btn  btn-danger btn-xs" type="submit" ng-click="action()"><i class="fa  fa-trash"></i>{{name}}</button>';

        return ddo;

});
