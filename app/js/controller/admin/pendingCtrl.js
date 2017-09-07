define(['app'], function(app) {
	app.register
		.controller('pendingCtrl',
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
						flowName: "流程名称1",
						taskName: "任务名称1",
						creater: "项目经理",
						createTime: "2017-06-05 14:00",
						startTime: "2017-06-05 14:00",
						flowState: "待处理",
						presentNode: "提交申请"
					}, {
						num: "2",
						flowName: "流程名称1",
						taskName: "任务名称1",
						creater: "项目经理",
						createTime: "2017-06-05 14:00",
						startTime: "2017-06-05 14:00",
						flowState: "待处理",
						presentNode: "提交申请"
					},{
						num: "3",
						flowName: "流程名称1",
						taskName: "任务名称1",
						creater: "项目经理",
						createTime: "2017-06-05 14:00",
						startTime: "2017-06-05 14:00",
						flowState: "待处理",
						presentNode: "提交申请"
					},{
						num: "4",
						flowName: "流程名称1",
						taskName: "任务名称1",
						creater: "项目经理",
						createTime: "2017-06-05 14:00",
						startTime: "2017-06-05 14:00",
						flowState: "待处理",
						presentNode: "提交申请"
					}
					]
				}

			})
})