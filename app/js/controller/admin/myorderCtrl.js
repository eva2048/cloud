define(['app'],function(app){
	app.register
		.controller('myorderCtrl',
            function($scope, $stateParams,$http) {
        //分页
        $scope.maxSize = 3;
        $scope.totalItems = 200;
        $scope.currentPage = 1;
        $scope.numPages = 3;
        $http({
            method:'get',
            url:'./data/myorder.php',
        }).then(function successCallback(data){
            var jsonstr = JSON.stringify(data);  
            var jsondata = $.parseJSON(jsonstr);  
            $scope.orders=jsondata.data.data;
            $scope.order=jsondata.data.data[0];
        },function errorCallback(data){
            console.log('失败'); 
        })

    })
})