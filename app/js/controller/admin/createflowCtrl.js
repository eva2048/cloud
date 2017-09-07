define(['app'], function(app) {
    app.register
        .controller('createflowCtrl',
            function($scope, $stateParams, $http,$interval) {
                $scope.infoDetail = false;
                $scope.attachmentInfo = false;
                $scope.historyInfo = false;
                $scope.basicInfoToggle = function() {
                    $scope.infoDetail = !$scope.infoDetail;
                }
                $scope.attachmentInfoToggle = function() {
                    $scope.attachmentInfo = !$scope.attachmentInfo;
                }
                $scope.historyToggle = function() {
                    $scope.historyInfo = !$scope.historyInfo;
                }
                //日期控件1
                $scope.dat = new Date();
                $scope.dat0 = new Date();
                $scope.format = "yyyy/MM/dd";
                $scope.altInputFormats = ['yyyy/M!/d!'];
                $scope.popup1 = {
                    opened: false
                };
                $scope.open1 = function() {
                    $scope.popup1.opened = true;
                };
                //
                $scope.data = {
                    list: [{
                        checkItem: "测试经理是否定义了测试活动的WBS(工作分解)？",
                        phaseType: "计划阶段",
                        ifPass: "Y"
                    }, {
                        checkItem: "测试经理是否定义了测试活动的WBS(工作分解)？测试经理是否定义了测试活动的WBS(工作分解)？测试经理是否定义了测试活动的WBS(工作分解)？测试经理是否定义了测试活动的WBS(工作分",
                        phaseType: "计划阶段",
                        ifPass: "Y"
                    }]
                };



                
            })
})