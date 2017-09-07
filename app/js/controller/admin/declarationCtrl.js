define(['app'], function(app) {
	app.register
		.controller('declarationCtrl',
			function($scope, $stateParams, $http) {
				//分页
				$scope.maxSize = 3;
				$scope.totalItems = 200;
				$scope.currentPage = 1;
				$scope.numPages = 3;
				//      $http({
				//          method:'get',
				//          url:'./data/launch.php',
				//      }).then(function successCallback(data){
				//          var jsonstr = JSON.stringify(data);  
				//          var jsondata = $.parseJSON(jsonstr);  
				//          $scope.data=jsondata.lists;
				//          console.log($scope.data);
				//      },function errorCallback(data){
				//          console.log('失败'); 
				//      })		
				$scope.data = {
					lists: [{
						num: "1",
						client: "上海泽众",
						product: "TCE",
						testType: "自动化",
						productType: "软件",
						submitter: "wxw012",
						submitTime: "2017-08-17 15:00",
						state: "等待受理"
					},
					{
						num: "2",
						client: "上海泽众",
						product: "AAA",
						testType: "自动化",
						productType: "软件",
						submitter: "wxw012",
						submitTime: "2017-08-17 15:00",
						state: "等待受理"
					},
					]
				}

			})
})