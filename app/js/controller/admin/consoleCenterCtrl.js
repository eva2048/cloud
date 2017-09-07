define(['app'], function(app) {
	app.register
		.controller('consoleCenterCtrl',
			function($scope, $stateParams, $http) {	
				$scope.closeTr=false;
				$scope.closeNotice=function(){
					$scope.closeTr=true;
				}
			})
})