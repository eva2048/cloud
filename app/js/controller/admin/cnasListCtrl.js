define(['app'], function(app) {
	app.register
		.controller('cnasCtrl',
			function($scope, $stateParams, $http) {
				$scope.item = {
					data: [{
							name: "立项申请提交立项申请提交立项申请提交立项申请提交立项申请提交222"
						},
						{
							name: "立项申请提交"
						},
						{
							name: "立项申请提交"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}, {
							name: "测试用例评审"
						}
					]
				};
				$scope.mouseover = function() {
					this.isShow = true;
				};
				$scope.mouseleave = function() {
					this.isShow = false;
				}
			})
})